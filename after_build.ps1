$gitHashPath = "./styleguide/_git_hash/index.html"

New-Item $gitHashPath -Force
Set-Content $gitHashPath $env:APPVEYOR_REPO_COMMIT

$gitHashPath = "./styleguide/_health/index.html"

New-Item $gitHashPath -Force
Set-Content $gitHashPath "Healthy"

Write-Host "Creating artifact"
Compress-Archive -Path "./styleguide/*" -DestinationPath "styleguide.zip"
