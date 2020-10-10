import requests

def sblservercountapi(botid:str,token:str,servercount:str):
	url = "http://shieldbotlist.tk/api/auth/stats/" + botid
	payload = "{\"server_count\": }" + servercount
	headers = {
  	'authorization': token,
 	 'Content-Type': 'application/json'
	}
	response = requests.request("POST", url, headers=headers, data = payload)
	print("Updated server count")

sblservercountapi("749825332470874203", "n1S6e7BRce1OdVE3p8fu", "1")
