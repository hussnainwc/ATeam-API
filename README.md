# ATeam-API

# Setup -- temporary until i write some scripts

for mac / linux execute these in the terminal

export ATeam_ACCESS_KEY=C3yJncEkYhy9gjaSJiYt7TnhY1qzO92hRYd5zdIzw9bsDaaoY1GgV7hpIBWI6k3u
export ATeam_REFRESH_KEY=lqAuBeS5BtfyZHnkESnErSSwEdOGyxAgeLhdytxIEn8Wo8jbtrWzLdEwcJ9DJ6Iu

for windows execute these in the cmd

set "ATeam_ACCESS_KEY=C3yJncEkYhy9gjaSJiYt7TnhY1qzO92hRYd5zdIzw9bsDaaoY1GgV7hpIBWI6k3u"
set "ATeam_REFRESH_KEY=lqAuBeS5BtfyZHnkESnErSSwEdOGyxAgeLhdytxIEn8Wo8jbtrWzLdEwcJ9DJ6Iu"

# Naming conventions

In some routes we have ids passed as parameters. Too keep things short and simple the id from the parameter is stored in a const. The name of the const is prefixed with the first letter of the model it belongs to and then followed by id. So user id would be uid, club id would be cid.
