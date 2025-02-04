# Alto dev

测试 Alto 的 Dark 模式

```powershell
git clone -b dev --recurse-submodules https://github.com/Seeridia/typora-theme-alto.git temp_folder

Get-ChildItem -Path 'temp_folder' -Force | ForEach-Object {
    $destination = Join-Path -Path '.' -ChildPath $_.Name
    if (Test-Path $destination) {
        Remove-Item -Path $destination -Recurse -Force
    }
    Move-Item -Path $_.FullName -Destination '.' -Force
}

Remove-Item -Path 'temp_folder' -Recurse -Force
```