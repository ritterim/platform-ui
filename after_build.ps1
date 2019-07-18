Write-Host "Creating artifact"
Compress-Archive -Path "./styleguide/*" -DestinationPath "styleguide.zip"
