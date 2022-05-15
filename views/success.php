<html lang="pt-br">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
    	<title>Portifolio | Joelson Fernandes</title>
        <link rel="shortcut icon" href="../assets/icons/favicon.ico" type="image/x-icon">

    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

	</head>

	<body>

        <div class="container">

            <div class="row">
                <div class="col-md-12">
                    <?php if($_GET['view'] == 'success') { ?> 
                        <div class="container">
                            <h1 class="display-4 text-success text-center">Sucesso!</h1>
                            <p class="text-center">Sua mensagem foi enviada com sucesso!</p>
                            <div class="text-center"><a href="../index.html" class="btn btn-success btn-lg mt-2 text-white">Voltar</a></div> 
                        </div>
                    <?php } ?>

                    <?php if($_GET['view'] == 'error') { ?> 
                        <div class="container">
                            <h1 class="display-4 text-danger text-center">Ops!</h1>
                            <p class="text-center">Não foi possivel enviar este Email. Por favor, tente novamente.</p>
                            <div class="text-center"><a href="../index.html" class="btn btn-danger btn-lg mt-2 text-white text-center">Voltar</a></div>
                        </div>
                    <?php } ?>
                    
                </div>
            </div>
        </div>

    </body>
</html>