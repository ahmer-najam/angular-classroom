## ANGULAR NOTES - 001 ##
-------------------------

* FOR STARTING SERVER (make sure you must be in root folder of the project)
ng serve
    OR
ng s

* FOR STOPING SERVER
control + C

* FOR INSTALLATION OF BOOTSTRAP
npm install bootstrap
npm install bootstrap@4.6 //for usage of specific version


OPEN angular.json file (in styles arrary add bootstrap.min.css
		"styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
			
* INSTALLATION OF YARN
npm i -g yarn

Restart web server

* INSTALLATION OF PRIMENG
* Website Goto https://primeng.org/installation
* yarn add primeng primeicons 
        OR 
* npm i primeng primeincons


COMPONENTS
----------
* CREATE NEW COMPONENT
    > ng g c components/welcome (WITH TEST FILE)
    > ng g c --skip-tests components/title (WITHOUT TEST FILE)


ROUTING
-------
* OPEN 'app-routing.module.ts' and open 'ROUTES' array and follow below style
* In ROUTES array add path & component

const routes: Routes = [
  { path: 'title', component: TitleComponent },
  { path: 'welcome', component: WelcomeComponent },
];
