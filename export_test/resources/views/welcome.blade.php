<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>File test</title>
    </head>
    <body>
        <h1>Export Data</h1>
        <p>
            Click <a href="{{route('users.pdf')}}">
                here
            </a>
            to download in PDF.
        </p>
        <p>
            Click <a href="{{route('users.excel')}}">
                here
            </a>
            to download in Excel.
        </p>
    </body>
</html>
