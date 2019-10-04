/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//														TEMPLATES
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const carouselTemplate= ` <div class="carousel slide animated zoomIn" data-ride="carousel" id="carouselExampleControls">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img alt="..." class="d-block w-100" src="images/img1.png">
                                </img>
                                <div id="rules-download" class="carousel-caption mt-5">
									<img src="images/cloud-download.png">
                                    <p>
                                        download our game rules
                                    </p>
                                    <a href="images/rules.pdf">
                                        <small>
                                            click here for download
                                        </small>
                                    </a>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img alt="..." class="d-block w-100" src="images/img3.png">
                                </img>
                                <div class="carousel-caption" id="next_match">
                                    <!-- PRÓXIMO PARTIDO -->
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" data-slide="prev" href="#carouselExampleControls" role="button">
                            <span aria-hidden="true" class="carousel-control-prev-icon">
                            </span>
                            <span class="sr-only">
                                Previous
                            </span>
                        </a>
                        <a class="carousel-control-next" data-slide="next" href="#carouselExampleControls" role="button">
                            <span aria-hidden="true" class="carousel-control-next-icon">
                            </span>
                            <span class="sr-only">
                                Next
                            </span>
                        </a>
                    </div>`

const collapseMonths= `<div class="cards animated zoomIn">
						<div class="card">
							<div class="card-header text-center align-center bg-dark">
							  <h2><button class="btn btn-link text-white" type="button" data-toggle="collapse" :data-target="'#'+mes" aria-expanded="false" onclick="hideUnusedLandscape()" aria-controls="september">{{mes}}</button></h2>
							</div>
						</div>	
						<div class="collapse multi-collapse" :id="mes">
						  <div class="card card-body p-0" :id="'tabla_'+mes">
							
						  </div>
						</div>
					</div>
					`

const conta= `	 <div class="wrapper  animated zoomIn">
                        <div class="company-info">
                            <h2 class="mt-5 animated lightSpeedIn">
                                Contact
                            </h2>
                            <ul>
                                <li>
                                    <i class="fa fa-map-marker-alt">
                                    </i>
                                    123 Fake st
                                </li>
                                <li>
                                    <i class="fa fa-phone">
                                    </i>
                                    (555) 555-5555
                                </li>
                                <li>
                                    <i class="fa fa-envelope">
                                    </i>
                                    nysl@x.com
                                </li>
                                <li>
                                <i class="fa fa-user"></i>
                                Michael Randall League Coordinator
                                </li>
                                <li>
                                <i class="fab fa-whatsapp"></i>
                                (630) 690-8132
                                </li>
                            </ul>
                        </div>
                        <div class="contact animated zoomIn">
                            <form id="contactForm" onsubmit="saveMessage()">
                                <p>
                                    <label>
                                       Name
                                    </label>
                                    <input id="name" name="name" required="" type="text">
                                    </input>
                                </p>
                                <p>
                                    <label>
                                        Last Name
                                    </label>
                                    <input id="lastname" name="lastname" type="text" required>
                                    </input>
                                </p>
                                <p>
                                    <label>
                                        Email Address
                                    </label>
                                    <input id="email" name="email" required="" type="email">
                                    </input>
                                </p>
                                <p>
                                    <label>
                                        Phone Number
                                    </label>
                                    <input id="phone" name="phone" type="text" required>
                                    </input>
                                </p>
                                <p class="full">
                                    <label>
                                        Message
                                    </label>
                                    <textarea id="message" name="message" rows="5" required>
                                    </textarea>
                                </p>
                                <p class="full">
                                    <button type="submit">
                                        Submit
                                    </button>
                                </p>
                            </form>
                        </div>
                    </div> `

const locations= `
					<div class="animated zoomIn">
					<tarjetas v-for="field in fields" :name="field.name" :src="field.map_url" :location="field.location" :aidi="field.id"></tarjetas>
					</div>
							`

const tarjeta_loc= `<div class="cards animated zoomIn">
						<div class="card">
							<div class="card-header text-center align-center bg-dark">
							  <button class="btn btn-link text-white" type="button" data-toggle="collapse" :data-target="'#'+aidi" aria-expanded="false" onclick="hideUnusedLandscape()" aria-controls="fields">{{name}}</button>
							</div>
						</div>	
						<div class="collapse multi-collapse" :id="aidi">
						  <div class="card card-body p-0" :id="'tabla_'+aidi">
							<h5>{{location}}</h5>
							<iframe id="map_locations" :src="src"></iframe>
						  </div>
						</div>
					</div>`

const modal_html= `<div class="modal fade" :id="name" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
					  <div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
						  <div class="modal-header">
							<h5 class="modal-title" :id='name+"ModalLabel"'>{{fixTeams(titulo)}}</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							  <span aria-hidden="true">&times;</span>
							</button>
						  </div>
						  <div class="modal-body">
							<div class="row">
								<table class="table table-hover text-center">
									<tr class=" w-100"><th>Location</th><th>Time</th></tr>
									<tr><td>{{location}}</td><td>{{time}}</td></tr>
									<tr class="">
										<th>Result</th><td>{{(results || "Not Played Yet")}}</td>
									</tr>
									<tr class="">
										<th>Winner</th><td>{{(fixOneTeam(winner) || "Not Played Yet")}}</td>
									</tr>
								</table>
								<iframe id="map_modal"></iframe>
							</div>
						  </div>
						</div>
					  </div>
					</div>`

const modal_login= `<div class="modal fade" id="modal_log" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
					  <div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
						  <div class="modal-header">
							<h5 class="modal-title" id='log_modal'>LOGIN</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							  <span aria-hidden="true">&times;</span>
							</button>
						  </div>
						  <div class="modal-body">
							<form>
								<div class="form-group">
									<label>E-mail:
										<input id="emailLog" type="email" required placeholder="yourEmail@example.com">
									</label>
									<label>Password:
										<input id="passLog" type="password" required>
									</label>
									<button style="color:black!important;" class="btn btn-secondary btn-centered" type="button" onclick="logInWithEmail(), displayBtns()">Login With Email</button>
									<button style="color:black!important;"class="btn btn-secondary btn-centered" type="button" onclick="createUserEmail()" > or Register</button>
								</div>
							</form>
							<hr>
							<button class="btn btn-danger" type="button" onclick="logInWithGoo(),displayBtns()"> <i class="fab fa-google mr-1"></i>Login With Google</button>
						  </div>
						</div>
					  </div>
					</div>`

const modal_error= `<div class="modal fade" id="modal_error" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
					  <div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
						  <div class="modal-header">
							<h5 class="modal-title" id='err_modal'>Wait a Minute...</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							  <span aria-hidden="true">&times;</span>
							</button>
						  </div>
						  <div class="modal-body" id="modal_err_bod">
							
						  </div>
						</div>
					  </div>
					</div>`

const modal_suc= `<div class="modal fade" id="modal_suc" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
					  <div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
						  <div class="modal-header">
							<h5 class="modal-title" id='suc_modal'></h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							  <span aria-hidden="true">&times;</span>
							</button>
						  </div>
						  <div class="modal-body" id="modal_suc_bod">
							
						  </div>
						</div>
					  </div>
					</div>`

const tablaGameData= `	<table id="tablaGameData" class="table table-dark text-center border-bottom-0">
							<tr class="bg-dark"><th>Location</th><th>Time</th></tr>
							<tr id="tb_landscape" class="bg-dark"></tr>
							<table id="resultados"></table>
						</table>`

const login= `<div id="btn-login">
			<nav class="navbar navbar-dark bg-dark animated zoomIn">
				<button onclick="displayBtns()" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
				  <span class="navbar-toggler-icon"> <i style="color: white; background-color:#0B2F3A; "class="fa fa-user" aria-hidden="true"></i></span>
				</button>
			</nav>
			<div id="pos-f-t">
			  <div class="collapse" id="navbarToggleExternalContent">
				<div class="bg-dark p-4">
					<div v-show="user != null" id="usr_info"></div>
					<button class="btn btn-secondary btn-centered" type="button" onclick="displayBtns()" data-toggle="modal" data-target="#modal_log" id="log-in" >Log IN</button>
					<button class="btn btn-secondary btn-centered" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" type="button" onclick="logOut(),displayBtns()" id="log-out" >Log OUT</button>
				</div>
			  </div>
			  
			</div>
		</div>`

const nav= ` <div id="stickyNav" class="btn-group btn-group-sm animated zoomIn " role="group">
					  <button type="button" class="btn btn-dark" @click="stateChanger('main'),scrollUp()">HOME</button>
					  <button type="button" class="btn btn-dark" @click="stateChanger('schedule'),scrollUp()">SCHEDULE</button>
					  <button type="button" class="btn btn-dark" @click="stateChanger('locations'),scrollUp()">CONTACT</button>
					  <button type="button" class="btn btn-dark" @click="stateChanger('conta'),scrollUp()">LOCATIONS</button>
					</div>
				`
const chat= `<div>	
				<div id="comments">
                </div>
				<span id="char_left">
				</span>
				<textarea id="comment_text" onfocus="countingCharacters()" onkeyup="countingCharacters()" placeholder="Max. 150 characters" rows="3">
				</textarea>
                <input id="camera" type="file" name="image" accept="image/*" capture="enviroment" style="display:none" >
				<button class="comment btn btn-secondary" type="button" @click="cam()"><img src="images/camara.png" style="height:1em"></button>
				<button class="comment btn btn-secondary" disabled="" id="btn-comment" onclick="comment(), countingCharacters()" type="button">
					SEND
				</button>
			</div>`

const matchDay= `	<div id="match_day">						
					</div>`	

const camera= `	<div id="camera">
					<canvas id="camera--sensor"></canvas>
					<video id="camera--view" autoplay playsinline></video>
					<img src="//:0" alt="" id="camera--output">
					<button id="camera--trigger">Take a picture</button>
				</div>`

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//														CONFIGURACION FIREBASE DATABASE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var database;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//																VUE OBJECT
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var app= new Vue({
	el: '#web_app',
	data: {
		state: "main",
		user_loggued: "guest",
		user_full: null,
		months: [],
		mesesValidos: ['JANUARY','FEBREAURY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'],
		valid_days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
		main: true,
		schedule: false,
		conta: false,
		locations: false,
		chat: false,
		loader: true,
		camera: false,
		fields: {},
		fieldsNames:[],
		partidos: {},
		toCommentMatch: "",
		partidoSelec:{
						teams: "",
						location: "",
						time: "",
						isPlayed: "",
						result: "",
						winner: "",
		},
		comments: [],
		ready: false,
		equipos: {},
		blobby: ""
	},
	created(){
		
		iniciarFirebase();
		traemeAlgo('teams','equipos');
		traemeAlgo('partidos', 'partidos');
		traemeAlgo('fields','fields');

	}
	,
	methods: {
		stateChanger: function(newState){
			this.state= newState;
		}	
	},
	watch: {
		state: function(){
			state_switcher(this.state);
		},
		ready: function(){
			showTodayMatchs();
		}
	},
	components: {
		camera: {
			template: camera,	
		},
		today: {
			template: matchDay,	
		},
		chat:{
			template: chat,
			methods:{
				cam: function(){
					document.getElementById('camera').click();
				}
			}
		},
		modal_err:{
			template: modal_error,
		},
		modal_success:{
			template: modal_suc,	
		},
		navbar:{
			template: nav,
			methods:{
				stateChanger: function(newState){
							app.state= newState;
							},
				scrollUp: function(){
					document.body.scrollTop= document.documentElement.scrollTop= 0;
				}
			}
		},
		login:{
			props: ['user'],
			template: login,
		},
		modal_login:{
			template: modal_login,	
		},
		tabla_game_data: {
			template: tablaGameData,
		},
		carousel: {
			methods: {
					stateChanger: function(newState){
									app.state= newState
					}
			},		
			template: carouselTemplate,
		},
		modal: {
			props: ['name','location','time','titulo','results','winner'],
			template: modal_html,
			methods:{
				fixTeams: function(str){
					let fixed= str.split('vs');
					let team_1= app.equipos[fixed[0]];
					let team_2= app.equipos[fixed[1]];

					return `${team_1} vs ${team_2}`;
				},
				fixOneTeam: function(str){
					return app.equipos[str];
				}
			}
		},
		mes_btn: {
			props: ['mes'],
			methods: {
					stateChanger: function(newState){
									app.state= newState
					}
			},		
			template: collapseMonths,
		},
		conta: {
			template: conta,
		},
		locations: {
			props: ['fields'],
			template: locations,
			components:{
				tarjetas:{
					props:['name','location','src','aidi'],
					template: tarjeta_loc,
				}
			}
		},
		
		
	}
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//														FUNCIONES PARA EL MANEJO DEL FLUJO DE LA PANTALLA
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function state_switcher(newState){//MANEJA EL FLUJO DE LAS PANTALLAS
	switch(newState){
		case 'main':
			app.main= true;
			app.schedule= false;
			app.locations= false;
			app.conta= false;
			app.chat= false;
			app.loader= false;
			app.camera= false;
			break;
		case 'schedule':
			app.main= false;
			app.schedule= true;
			app.locations= false;
			app.conta= false;
			fixDates();
			app.months.forEach(month => document.getElementById('tabla_'+month).innerHTML= crearTablas(app.partidos[month.toLowerCase()], month))
			app.chat= false;
			app.loader= false;
			app.camera= false;
			break;
		case 'conta':
			app.main= false;
			app.schedule= false;
			app.locations= false;
			app.conta= true;
			app.chat= false;
			app.loader= false;
			app.camera= false;
			break;
		case 'locations':
			app.main= false;
			app.schedule= false;
			app.locations= true;
			app.conta= false;
			app.chat= false;
			app.loader= false;
			app.camera= false;
			fieldsNames();
			break;
		case 'chat':
			app.main= false;
			app.schedule= false;
			app.locations= false;
			app.conta= false;
			app.chat= true;
			app.loader= false;
			app.camera= false;
			break;
		case 'camera':
			app.main= false;
			app.schedule= false;
			app.locations= false;
			app.conta= false;
			app.chat= false;
			app.loader= false;
			app.camera= true;
			cameraStart();
		default:
	}
}

function hideUnusedLandscape(){//OCULTA LOS COMPONENTES CUANDO SE DEJAN DE USAR EN MODO LANDSCAPE
	document.getElementById('map_stadium').style.display= 'none';
	document.getElementById('tablaGameData').style.display= 'none';
}

function showUsedLandscape(){//MUESTRA LOS COMPONENTES AL SELECCIONAR PARTIDOS EN MODO LANDSCAPE 
	document.getElementById('maps_landscape').style.display= 'block';
	document.getElementById('tablaGameData').style.display= 'inline-table';
	document.getElementById('map_stadium').style.display= 'block';
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//													FUNCIONES DATABASE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getSchedules(){//BUSCA LOS PARTIDOS POR MES
	app.months.forEach(month => getMatches(month));
	
}

function getMatches(month){//BUSCA TODOS LOS PARTIDOS PARA UN DETERMINADO MES
	database.ref('/partidos/'+month.toLowerCase()).once('value').then(function(snapshot) {
		app.partidos[month.toLowerCase()]= snapshot.val();
		fixDates();
		showNextMatch();
		showTodayMatchs();
	})
}
												   
function traemeAlgo(queQueres, valor){//TRAE DATOS DE LA BASE DE FIREBASE
	database.ref('/'+queQueres).once('value').then(function(snapshot) { 
		
		switch(valor){//SE IMPLEMENTA UN SWITCH XQ ES FACIL DE ESCALAR EN CASO DE AGREGAR MAS MESES O REQUESTS
			case 'september':
				app.partidosSeptember= snapshot.val();
				break;
			case 'october':
				app.partidosOctober= snapshot.val();
				break;
			case 'fields':
				
				if(localStorage.getItem(valor)){
					app.fields= JSON.parse(localStorage.getItem(valor))
				}
				
				app.fields= snapshot.val();
				localStorage.setItem(valor, JSON.stringify(app.fields)); 
				break;
			case 'partidos':
				Object.keys(snapshot.val()).forEach(i => app.months.push(i.toUpperCase()));
				app.months.sort((x,y) => app.mesesValidos.indexOf(x) - app.mesesValidos.indexOf(y));
				getSchedules();
				break;
			case 'equipos':
				app.equipos= snapshot.val();
		}
		
		
	})
}

function iniciarFirebase(){//INICIA LA CONEXION CON FIREBASE Y CREA UNA REFERENCIA
	database = firebase.database();
}

function buscarDireccion(estadio){
	return app.fields[estadio].map_url;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//															FUNCIONES PARA LA CARGA DE TABLAS Y DATOS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function loadTablaSelectedMatch(id, baseD){//CARGA LOS DATOS PARA LA INFO EN MODO LANDSCAPE
	let auxData= getSelectedMatchData(id,baseD);
	let map_location="";
	
	app.partidoSelec.location= auxData.location;
	app.partidoSelec.time= auxData.time;
	app.partidoSelec.teams= auxData.teams;
	app.partidoSelec.isPlayed= auxData.isPlayed;
	app.partidoSelec.result= auxData.results;
	app.partidoSelec.winner= auxData.winner;
	
	map_location= buscarDireccion(auxData.location);
	
	document.getElementById('tb_landscape').innerHTML= `<td>${app.partidoSelec.location}</td><td>${app.partidoSelec.time}</td>`;
	
	(app.partidoSelec.isPlayed)? document.getElementById('resultados').innerHTML= `<tbody><tr><th>Result</th><td>${app.partidoSelec.result}</td></tr><tr><th>Winner</th><td>${(fixOneTeam(app.partidoSelec.winner) || "TIE")}</td></tr></tbody>`: document.getElementById('resultados').innerHTML= "";
	
	document.getElementById('map_stadium').src= map_location;
}

function loadSelectedMatchData(id,baseD){//CARGA LOS DATOS PARA EL MODAL
	
	let auxData= getSelectedMatchData(id,baseD);
	let map_location="";
	
	app.partidoSelec.location= auxData.location;
	app.partidoSelec.time= auxData.time;
	app.partidoSelec.teams= auxData.teams;
	app.partidoSelec.isPlayed= auxData.isPlayed;
	app.partidoSelec.result= auxData.results;
	app.partidoSelec.winner= auxData.winner;
	
	map_location= buscarDireccion(auxData.location);
	
	document.getElementById('map_modal').src= map_location;
}

function getSelectedMatchData(id,baseD){//JUNTA Y DEVUELVE UN OBJETO CON LOS VALORES DE LOCATION Y TIME DEL PARTIDO SELECCIONADO
	
	let aux= id.split("-");
	let fecha= aux[0];
	let partido= aux[1];
	
	return app.partidos[baseD.toLowerCase()][fecha][partido];
	
}

function crearTablas(datos, mes){//CREA LAS TABLAS CON LOS PARTIDOS
	let base= datos;
	let str=`<table class="table table-hover table-borderless mb-2" >
							<thead class="text-center align-middle" style="color:white;">
								<tr>
									<th>Date</th>
									<th>Teams</th>
									<th>More</th>
								</tr>
							</thead>
							
							<tbody class="text-center align-middle">`;
	for(fecha in base){
		for(partido in base[fecha]){
			str += `
							<tr>
									<td>${base[fecha][partido].date}</td>
									<td>${fixTeams(base[fecha][partido].teams)}</td>
									<td>
										<button id="${fecha}-${partido}" type="button" class="btn btn-primary btns_portrait" data-toggle="modal" data-target="#theOneBigModal" onclick="loadSelectedMatchData('${fecha}-${partido}','${mes}')"><i class="fas fa-info-circle"></i></button>
										<button id="${fecha}-${partido}" type="button" class="btn btn-primary btns_landscape"  onclick="loadTablaSelectedMatch('${fecha}-${partido}','${mes}'), showUsedLandscape()"><i class="fas fa-info-circle"></i></button>
										<button id="${fecha}-${partido}" type="button" class="btn btn-success chat-btn" onclick="app.stateChanger('chat'), liveComments('${fecha}-${partido}')"><i class="fas fa-comments"></i></button></td>
							</tr>
					`
							
		}
	}
	str += `</tbody></table>`
	
	return str;
}

function fieldsNames(){
	app.fieldsNames= Object.keys(app.fields);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//													MANEJO DE FECHAS																					
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	function toDateFormat(matchDate, matchTime){//DEVUELVE UNA FECHA CON FORMATO DATE A PARTIR DE DOS STRINGS, UNA CON LA FECHA Y OTRA CON LA HORA
		let today= new Date();
		let hora= [parseInt(matchTime.split(":")[0]), parseInt(matchTime.split(":")[1].split(" ")[0]) , matchTime.split(":")[1].split(" ")[1]];
		let fecha= new Date(today.getFullYear(), parseInt(matchDate.split("/")[0]-1), parseInt(matchDate.split("/")[1]), (hora[2] === "a.m.")? hora[0] : hora[0]+12, hora[1], 0);

		return fecha;
	}

	function fixDates(){//ARRLEGA LAS FECHAS DE LOS PARTIDOS PARA QUE TENGAN UN FORMATO DATE
					
		for(mes in app.partidos){
			for(fecha in app.partidos[mes]){
				for(partido in app.partidos[mes][fecha]){
					
					Object.defineProperty(app.partidos[mes][fecha][partido], 'formatedDate', {
										value: toDateFormat(app.partidos[mes][fecha][partido].date, app.partidos[mes][fecha][partido].time) ,
										enumerable: true,
										writable: true });
				}
			}
		}
		
	}
	function nextMatchesPath(){
		
		let today= new Date();
		
		for(mes in app.partidos){
			for(fecha in app.partidos[mes]){
				for(partido in app.partidos[mes][fecha]){
					if(app.partidos[mes][fecha][partido].formatedDate > today)
						return [mes,fecha];
				}
			}
		}
	}

	function nextMatch(){//DEVUELVE EL PROXIMO PARTIDO A JUGARSE
		
		let today= new Date();
		
		for(mes in app.partidos){
			for(fecha in app.partidos[mes]){
				for(partido in app.partidos[mes][fecha]){
					if(app.partidos[mes][fecha][partido].formatedDate > today)
						return app.partidos[mes][fecha][partido];
				}
			}
		}
		
	}

	function isToday_MatchDay(){//DICE SI EL DIA DE LA FECHA SE JUEGAN PARTIDOS
		
		let today= new Date();
		let mes_today= today.getMonth();
		let dia_today= today.getDate();
		
		
		
		for(mes in app.partidos){
			for(fecha in app.partidos[mes]){
				for(partido in app.partidos[mes][fecha]){
					
					if(app.partidos[mes][fecha][partido].formatedDate.getMonth() === mes_today && app.partidos[mes][fecha][partido].formatedDate.getDate() === dia_today){
						return true;
					}
				
				}
			}
		}
		
		return false;
	}

	function isToday_MatchDay(dia){//FUNCION SOBRECARGADA DE PRUEBA EN LA QUE SE PUEDE ELEGIR EL DIA A CHEQUEAR
		
		let today= new Date();
		let mes_today= today.getMonth();
		let dia_today= dia;
		
		
		
		for(mes in app.partidos){
			for(fecha in app.partidos[mes]){
				for(partido in app.partidos[mes][fecha]){
					
					if(app.partidos[mes][fecha][partido].formatedDate.getMonth() === mes_today && app.partidos[mes][fecha][partido].formatedDate.getDate() === dia_today){
						return true;
					}
				
				}
			}
		}
		
		return false;
	}

	function showNextMatch(){//MUESTRA EL PROXIMO PARTIDO EN EL CAROUSEL
		
		let next_match= nextMatch();
		
		if(next_match != undefined){
			let showingNextMatch= document.querySelector('#next_match');

			let str= `	<p>NEXT MATCH</p>
						<p>${fixTeams(next_match.teams)}</p>
						<p>${app.valid_days[(next_match.formatedDate.getDay())]}</p>
						<p>${next_match.formatedDate.getHours()}:${next_match.formatedDate.getMinutes()}</p>`

			showingNextMatch.innerHTML= str;
		}
	}

	function showTodayMatchs(){
		
		let path= nextMatchesPath();
		let str="";
		let todayMatches= document.querySelector('#match_day');
		
		if(path!= undefined && isToday_MatchDay()){
			let nextGames= app.partidos[path[0]][path[1]];
			
			str= `<p><h2>TODAY GAMES</h2></p>`
			
			for(game in nextGames){
				str+=  `<p><h3 class="text-center">${fixTeams(nextGames[game].teams)} <br> <small>${nextGames[game].time}</small></h3></p>`
			}
			
			
		}else{
			str= "<p><h3 class='text-center'>No Matches Today</h3></p>";
		}
		todayMatches.innerHTML= str;
	}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//													FUNCIONES LOGIN
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function isLogged(){//DEVUELVE SI HAY UN USUARIO LOGUEADO O NO
	return !(app.user_loggued === 'guest');
}

function displayBtns(){//MUESTRA LOS BOTONES DEL LOGIN DEPEDIENDO DE SI HAY AGUIEN LOGUEADO O NO
	isLogged()? (document.getElementById("log-in").style.display= 'none', document.getElementById('log-out').style.display= 'block') : (document.getElementById("log-in").style.display= 'block', document.getElementById('log-out').style.display= 'none') 
}

function logInWithGoo(){//FUNCION LOGIN CON SERVIVIOS DE GOOGLE
	
	let providerGoogle= new firebase.auth.GoogleAuthProvider();
	
	firebase.auth().signInWithPopup(providerGoogle).then(function(promise){
		app.user_loggued= firebase.app().auth().getUid();
		app.user_full= firebase.app().auth().currentUser;

		$('#modal_log').modal('hide');
		$('#navbarToggleExternalContent').collapse('hide');
		userInfo();
	}).catch(function(error){
		let errorMsg= error.message;
		console.log(errorMsg);
		$('#modal_error').modal('show');
		document.querySelector('#modal_err_bod').innerText= errorMsg;
	});
	
	
}

function logInWithEmail(){//FUNCION DE LOGIN CON UN EMAIL Y PASSWORD
	let email= document.querySelector('#emailLog').value;
	let pass= document.querySelector('#passLog').value;
	
	firebase.auth().signInWithEmailAndPassword(email, pass).then(function(promise){
		document.querySelector('#emailLog').value= "";
		document.querySelector('#passLog').value= "";

		app.user_loggued= firebase.app().auth().getUid();
		app.user_full= firebase.app().auth().currentUser;
		
		$('#modal_log').modal('hide');
		$('#navbarToggleExternalContent').collapse('hide');
		userInfo();
	}).catch(function(error){
		let errorMsg= error.message;
		console.log(errorMsg);
		$('#modal_error').modal('show');
		document.querySelector('#modal_err_bod').innerText= errorMsg;
	})
	
}

function createUserEmail(){//CREA UN USUARIO CON EMAIL Y PASSWORD
	let email= document.querySelector('#emailLog').value;
	let pass= document.querySelector('#passLog').value;
	
	firebase.auth().createUserWithEmailAndPassword(email, pass).then(function(promise){
		$('#modal_suc').modal('show');
		document.querySelector('#suc_modal').innerHTML= `<p>User Created<span><img class="img-fluid" src="/images/tick_xsmall.png" alt="tick"></span></p>`
		document.querySelector('#modal_suc_bod').innerText= "Please proceed to Log.";
	}).catch(function(error) {
		let errorMsg = error.message;
		console.log(errorMsg);
		$('#modal_error').modal('show');
		document.querySelector('#modal_err_bod').innerText= errorMsg;
	});
}

function logOut(){//REALIZA EL LOGOUT DE LA APP
	firebase.auth().signOut();
	app.user_loggued= "guest";
	app.user_full= null;
}

function userInfo(){//CARGA LA INFORMACION DEL USUARIO LOGUEADO 
	
	let usr_info= document.querySelector('#usr_info');
	let nombre_usr= document.createElement('H4');
	let img_usr= document.createElement('IMG');
	
	nombre_usr.innerText= (app.user_full.displayName || app.user_full.email);
	
	usr_info.hasChildNodes() ? limpiarNodos(usr_info, [nombre_usr.nodeName,img_usr.nodeName]) : null;
	
	usr_info.appendChild(nombre_usr);
	
	(app.user_full.photoURL)? 
		(img_usr.id= 'user_image',
		img_usr.src= app.user_full.photoURL,
		img_usr.alt= 'User profile picture',
		usr_info.appendChild(img_usr)) : null;
						
}

function limpiarNodos(parent, arr_limpiar){//REMUEVE TODOS LOS CHILDS SELECCIONADOS DE UN PARENT
	
	let childs= parent.childNodes;
	
	for(let i=0;i<childs.length;i++){
		for(let j=0;j<arr_limpiar.length;j++){
			if(childs[i].nodeName == arr_limpiar[j]){
				parent.removeChild(childs[i]);
			}
		}
	}
	
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//												FUNCIONES CHAT
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function comment(){
	
	let match= app.toCommentMatch;
	
	let comment= document.getElementById('comment_text').value;
	let user= (app.user_full.displayName || app.user_full.displayName);
	let date= new Date().toDateString();
	let user_mail= app.user_full.email;
	
	let newKey = firebase.database().ref(`forum/${match}/`).push().key;
	let update = {};
	
	update[`forum/${match}/${newKey}`] = {
		usr_name: (user || user_mail),
		usr_email: user_mail,
		comment: comment,
		date: date,
		blob: app.blobby
	}
	
	firebase.database().ref().update(update);
    
	document.getElementById('comment_text').value = "";

}

async function getComments(match){//FUERA DE USO -- TRAE LOS COMENTARIOS DE UN PARTIDO
	
	let referencia= database.ref(/forum/+match);
	let aux= [];
	
	await referencia.once('value').then(function(snapshot){
		for(comentario in snapshot.val()){
			aux.push(snapshot.val()[comentario]);
		}
		app.comments= aux;	
	})
	
	showComments();

}

function countingCharacters(){//FUNCION PARA RESTRINGIR LARGO DE MENSAJES Y HABILITAR ENVIOS
	let comment= document.getElementById('comment_text');
	let text= comment.value;
	let max_char= 150;
	let button= document.getElementById('btn-comment');
	let remain= document.getElementById('char_left');
	
	if(app.user_loggued === "guest")
		button.innerText= "You Must Log IN";
		
	remain.innerText= max_char - text.length + ' characters left';
	
	if(text.length > 0 && text.length <= max_char && app.user_loggued !== "guest"){
		button.innerText= "SEND";
		button.removeAttribute('disabled');
		remain.innerText= max_char - text.length + ' characters left';
	}else{
		remain.innerText= max_char - text.length + ' characters left';
		button.setAttribute('disabled', 'disabled');
	}
	
}

async function showComments(){//FUERA DE USO -- MUESTRA LOS COMENTARIOS

	let str= "";
	let comment_section= document.getElementById('comments');

	for(let i=0; i<app.comments.length; i++){
		str+= `	<div class="card"">
				  <div class="card-body">
				    <p class="card-title"><a href="mailto:${app.comments[i].usr_email}">${app.comments[i].usr_name}</a></h5>
				    <p class="card-subtitle mb-2 text-muted">${app.comments[i].date}</h6>
				    <p class="card-text">${app.comments[i].comment}</p>
				  </div>
				</div>`
	}
	
	comment_section.innerHTML= str;
}

function liveComments(match){//TRAE Y MUESTRA LOS COMENTAARIOS DE UN PARTIDO EN TIEMPO REAL
	
	app.toCommentMatch= match;
	
	borrarComentarios();
	
	let referencia= database.ref(/forum/+match)
	let comment_section= document.getElementById('comments');
	
	referencia.on('child_added', function(snapshot){
		
		let newComment= snapshot.val();
		
		let str= `	<div class="card">
				  		<div class="card-body">
							<p class="card-title"><a href="mailto:${newComment.usr_email}">${(newComment.usr_name || newComment.usr_email)}</a></p>
							<p class="card-subtitle mb-2 text-muted">${newComment.date}</p>
							<p class="card-text">${newComment.comment}</p>
					  </div>
					</div>`;
		
		comment_section.innerHTML+= str;	
	})
}

function borrarComentarios(){//BORRA LOS COMENTARIOS PARA REFRESCAR LA PAGINA
	document.getElementById('comments').innerHTML="";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//									FUNCIONES ANIMACION
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function notDisplayAnimation(){//OCULTAR LA ANIMACION DE INICIO
	setTimeout(notDisplay(), 0);
}

function notDisplay(){//QUITA EL DISPLAY DE LA ANIMACION
	let div= document.getElementById('animacion');
	div.style.zIndex -1000000;
	//div.style.width= '0'

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//							FUNCIONES CONTACTO
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function saveMessage(){//GUARDA LOS MENSAJES ENVIADOS EN LA PESTAÑA DE CONTACTOS
	let name= document.querySelector('#name').value;
	let lastName= document.querySelector('#lastname').value;
	let email= document.querySelector('#email').value;
	let phone= document.querySelector('#phone').value;
	let message= document.querySelector('#message').value;
	
	let newKey = firebase.database().ref(`contact_messages/`).push().key;
	let update = {};
	
	update[`contact_messages/${newKey}`] = {
		usr_name: name,
		usr_lastname: lastName,
		usr_email: email,
		message: message,
		phone: phone,
		viewed: false,
	}
	
	firebase.database().ref().update(update);
    
	document.querySelector('#name').value = "";
	document.querySelector('#lastname').value="";
	document.querySelector('#email').value="";
	document.querySelector('#phone').value="";
	document.querySelector('#message').value="";
	
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//							FUNCIONES EQUIPOS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fixTeams(str){//BUSCA LOS NOMBRES EN LA BASE DE DATOS Y LOS MUESTRA
	let fixed= str.split('vs');
	let team_1= app.equipos[fixed[0]];
	let team_2= app.equipos[fixed[1]];

	return `${team_1} vs ${team_2}`;
}

function fixOneTeam(str){
	return app.equipos[str];
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//							FUNCIONES CAMARA
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* CAMARA SIN APLICACION NATIVA DE CAMARA
var constraints = { video: { facingMode: "enviroment"}, audio: false };
const cameraView = document.querySelector("#camera--view"),
      cameraOutput = document.querySelector("#camera--output"),
      cameraSensor = document.querySelector("#camera--sensor"),
      cameraTrigger = document.querySelector("#camera--trigger")

function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}

cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
};
*/

var cameraEl= document.getElementById('camera');

cameraEl.addEventListener('change', function(evt) {
	let file = evt.target.files[0];
	
	app.blobby= URL.createObjectURL(file);
})


