import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def enviar_email_autenticacao(email):
    # Configurar as informações do servidor SMTP do Gmail
    smtp_server = "smtp.gmail.com"
    smtp_port = 587
    smtp_email = "seuemail@gmail.com" # Insira seu e-mail do Gmail
    smtp_senha = "suasenha" # Insira sua senha do Gmail

    # Configurar as informações do e-mail
    remetente = "Conceito Treinamentos <seuemail@gmail.com>" # Insira o nome que aparecerá como remetente
    destinatario = email # Insira o endereço de e-mail do destinatário
    assunto = "Autenticação de E-mail"
    corpo = "Olá! Este é um e-mail de autenticação para o endereço {}.".format(email)

    # Criar o objeto da mensagem
    mensagem = MIMEMultipart()
    mensagem["From"] = remetente
    mensagem["To"] = destinatario
    mensagem["Subject"] = assunto

    # Adicionar o corpo da mensagem
    mensagem.attach(MIMEText(corpo, "plain"))

    # Enviar o e-mail usando o servidor SMTP do Gmail
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.ehlo()
        server.starttls()
        server.login(smtp_email, smtp_senha)
        server.sendmail(smtp_email, destinatario, mensagem.as_string())

    print("E-mail enviado com sucesso para", destinatario)
