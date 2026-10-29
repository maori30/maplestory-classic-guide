/**
 * Update Service - MapleStory Classic World Guide
 * Checks GitHub Releases for new software versions
 */

export const CURRENT_VERSION = '1.0.0';
export const GITHUB_OWNER = 'maori30';
export const GITHUB_REPO = 'maplestory-classic-guide';
export const REPO_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`;

// Semver comparison: returns 1 if v1 > v2, -1 if v1 < v2, 0 if equal
export function compareVersions(v1, v2) {
  const clean1 = (v1 || '').replace(/^v/, '').trim();
  const clean2 = (v2 || '').replace(/^v/, '').trim();
  
  const parts1 = clean1.split('.').map(n => parseInt(n, 10) || 0);
  const parts2 = clean2.split('.').map(n => parseInt(n, 10) || 0);
  
  for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
    const num1 = parts1[i] || 0;
    const num2 = parts2[i] || 0;
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }
  return 0;
}

/**
 * Check GitHub Releases for newer version
 */
export async function checkForAppUpdates() {
  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (res.status === 404) {
      // Repository or releases don't exist yet
      return {
        checked: true,
        hasUpdate: false,
        noReleasesYet: true,
        currentVersion: CURRENT_VERSION,
        latestVersion: CURRENT_VERSION,
        repoUrl: REPO_URL
      };
    }

    if (!res.ok) {
      throw new Error(`GitHub API error (${res.status})`);
    }

    const data = await res.json();
    const latestTag = data.tag_name || data.name || '1.0.0';
    const hasUpdate = compareVersions(latestTag, CURRENT_VERSION) > 0;

    // Find the Windows executable asset if attached
    const exeAsset = Array.isArray(data.assets) 
      ? data.assets.find(a => a.name && (a.name.endsWith('.exe') || a.name.includes('מדריך')))
      : null;

    return {
      checked: true,
      hasUpdate,
      currentVersion: CURRENT_VERSION,
      latestVersion: latestTag.replace(/^v/, ''),
      releaseName: data.name || latestTag,
      releaseNotes: data.body || '',
      publishedAt: data.published_at ? new Date(data.published_at).toLocaleDateString('he-IL') : null,
      downloadUrl: exeAsset ? exeAsset.browser_download_url : data.html_url,
      htmlUrl: data.html_url || REPO_URL,
      exeSizeMb: exeAsset ? (exeAsset.size / (1024 * 1024)).toFixed(1) : null
    };
  } catch (err) {
    console.warn('Update check failed:', err);
    return {
      checked: true,
      error: err.message,
      hasUpdate: false,
      currentVersion: CURRENT_VERSION,
      repoUrl: REPO_URL
    };
  }
}
