$gitHashPath = "./styleguide/_git_hash/index.html"

New-Item $gitHashPath -Force
Set-Content $gitHashPath $env:APPVEYOR_REPO_COMMIT

$gitHashPath = "./styleguide/_health/index.html"

New-Item $gitHashPath -Force
Set-Content $gitHashPath "Healthy"