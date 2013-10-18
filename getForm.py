"""
Gets form information and sends to an email
"""

import cgi, smtplib

def grabFormData():
	#Fetching Form Data from HTML Form
	form = cgi.FieldStorage()
	name = form.getvalue('name')
	email = form.getvalue('email')
	comment = form.getvalue('comment')
	if "" in [name,email]:
		raise "A MANDATORY FIELD IS EMPTY"
	if "@" not in email:
		raise "THE EMAIL IS NOT VALID"
	return name,email,comment,1

def connectServer(user,password,fromaddr, toaddrs, msg):
	server = smtplib.SMTP('smtp.gmail.com:587')

	#Opening the server connection
	server.starttls()
	
	#Logging in credentials
	server.login(user,password)

	#Sending the email


	server.sendmail(fromaddr, toaddrs, "\n".join(msg))
	server.quit() 
	print "Email Sent Successfully"
	return 1

if __name__ == "__main__":

	name,email,comment,success = grabFormData()

	#Setting up to and from email addresses
	fromaddr = "olin.aging.emailbot@gmail.com"
	toaddrs = "olin.aging.emailbot@gmail.com"
	

	#Email Authentification 
	username = 'olin.aging.emailbot'
	password = 'olin1234'

	#Constructing email
	
	msg = map(str,[name,email,comment])
	
	#Gmail's SMTP Server
	connectServer(username,password,fromaddr, toaddrs, msg)

