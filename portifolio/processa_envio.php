<?php

    require "../../lib/phpmailer/Exception.php";
    require "../../lib/phpmailer/OAuth.php";
    require "../../lib/phpmailer/PHPMailer.php";
    require "../../lib/phpmailer/POP3.php";
    require "../../lib/phpmailer/SMTP.php";

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    class Mensagem {
        private $email = null;
        private $nome = null;
        private $mensagem = null;
        private $assunto = "Contato Site";

        public function __get($atributo) {
            return $this->$atributo;
        }

        public function __set($atributo, $valor) {
            $this->$atributo = $valor;
        }

    }
    
    $mensagem = new Mensagem();
    
    $mensagem->__set('email', $_GET['email']);
    $mensagem->__set('nome', $_GET['nome']);
    $mensagem->__set('mensagem', $_GET['mensagem']);

        $mail = new PHPMailer(true);

        try {
            //Server settings
            //$mail->SMTPDebug = 1;                      //Enable verbose debug output
            $mail->CharSet = 'UTF-8';
            $mail->Debugoutput = 'html';
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'servidor';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'email@email.com';                     //SMTP username
            $mail->Password   = '************';                               //SMTP password
            $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
            $mail->Port       = '465';                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            //Recipients
            $mail->setFrom('email@email.com'); //remetente
            $mail->addAddress('email@email.com');     //destinátario
            //$mail->addReplyTo('', '');
            //$mail->addCC('cc@example.com');
            //$mail->addBCC('bcc@example.com');

            //Attachments
            //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
            //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = $mensagem->__get('assunto');
            $mail->Body = "Nome: ". $mensagem->__get('nome') . "<br> Email: ". $mensagem->__get('email') . "<br>". $mensagem->__get('mensagem');
            $mail->AltBody = 'é necessario utilizar um client que suporte HTML para ter acesso total ao conteudo dessa mensagem';

            $mail->send();

            header('Location: ../../views/deliveredEmail.php?view=success');
       
        } catch (Exception $e) {

            header('Location: ../../views/deliveredEmail.php?view=error');
    
        }   
        
?>