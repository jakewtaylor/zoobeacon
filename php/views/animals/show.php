<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Zoobeacon</title>

        <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">
    </head>
    <body>
        <div id="root"></div>

        <script>
            window.apiUrl = "<?= $api_url ?>";
        </script>
        <script src="/app/js/app.js"></script>

        <style>
            *, *:after, *:before {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                user-select: none;
            }

            html, body, body > div {
                font-family: 'Varela Round', sans-serif;
                height: 100%;
            }

            body > div {
                overflow: hidden;
                position: fixed;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
            }
        </style>
    </body>
</html>