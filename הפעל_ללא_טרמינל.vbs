Set WshShell = CreateObject("WScript.Shell")
strCurDir = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)
WshShell.CurrentDirectory = strCurDir

Set fso = CreateObject("Scripting.FileSystemObject")
If fso.FileExists(strCurDir & "\node_modules\electron\dist\electron.exe") Then
    WshShell.Run """" & strCurDir & "\node_modules\electron\dist\electron.exe"" .", 0, False
Else
    WshShell.Run "msedge --app=""file:///" & Replace(strCurDir, "\", "/") & "/dist/index.html"" --window-size=1280,860", 0, False
End If
