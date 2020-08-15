<h1 style="text-align: center;">Manejo de Orden de Compra</h1>
<img src="public/images/backgrounds/test.png" alt="">
<p>Pequeño test como parte de un proceso de selección para una empresa colombiana llamada The Factory</p>
<h2>Instalación</h2>
<ul>
	<li>sudo chmod -R 777 test</li>
	<li>cd test</li>
	<li>composer install</li>
	<li>cp .env.example .env</li>
	<li>php artisan key:generate</li>
	<li>composer update</li>
	<li>php artisan cache:clear && php artisan config:cache && php artisan config:clear</li>
	<li>composer require tymon/jwt-auth</li>
	<li>php artisan jwt:secret</li>
	<li>Desde la consola (usando MySql) podrías hacer algo similar a esto<br/>
	mysql -uroot -psecret</li>
	<li>CREATE DATABASE tu_base_de_datos;</li>
	<li>Posteriormente debes agregar las credenciales al archivo .env<br/>
	DB_HOST=localhost<br/>
	DB_DATABASE=tu_base_de_datos<br/>
	DB_USERNAME=root<br/>
	DB_PASSWORD=tu-contraseña</li>
	<li>php artisan migrate --seed</li>
	<li>npm install</li>
	<li>npm run dev</li>
	<li>npm artisan serve</li>
</ul>
<span>
	<p>
		puedes ingresar al sistema con el siguiente usuario:
	</p>
	<ul>
		<li>
			correo: 
			admin@gmail.com
		</li>
		<li>
			clave: 1234
		</li>
	</ul>
</span>
<small style="text-align: center;">
	Gabriel Viloria<br/>
	2020
</small>