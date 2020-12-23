$(function(){
    $("a").click(function(event){
        //este if hace que al presionar el logo, haga smooth scroll hasta arriba
        if(this.hash=="#top"){
            $("a[href='#top']").click(function() {
                $("html, body").animate({ scrollTop: 0 }, "slow");
              });
        }//Fin primer if
        else{
            //con este if se asegura que this.hash tenga un valor antes de anular el comportamiento predeterminado
            if(this.hash !== ""){
                //Previene el comportamiento de click predeterminado
                event.preventDefault();
    
                //Guarda el valor del hash en una variable llamada gato
                var gato = this.hash;
    
                //Usa el métod animate para animar el scroll y hacerlo de una forma suave. El número 800 especifica el número de milisegundos que demorará en llegar hasta el área que corresponda
                $('html, body').animate({
                    scrollTop: $(gato).offset().top
                },800,function(){
                    //Agrega hash a la URL cuando haya terminado de desplazarse (comportamiento de click predeterminado)
                    window.location.hash=gato;
                });
            } //Fin del if anidado
        }//fin else
    }); 
    //habilita tooltips
    $('[data-toggle="tooltip"]').tooltip()
});