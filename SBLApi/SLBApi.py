import requests, json

def sblapi(botid:str,token:str,servercount:str):
	if botid == "":
		raise ValueError('Bot id is empty, please fetch one from discordapp.com/developers')
	if token == "":
		raise ValueError('Token is empty, please fetch one from shieldbotlist.tk')
	url = "https://shieldbotlist.website:25565/api/auth/stats/" + botid
	payload = json.dumps(
		{'server_count': servercount}
	)
	headers = {
  	'authorization': token,
 	 'Content-Type': 'application/json'
	}
	response = requests.request("POST", url, headers=headers, data=payload)
	print(response.text)
	print("Updated server count")
