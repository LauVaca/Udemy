var inicio = new Date().getTime();
        //nos da el tiempo de inicio de referencia, es de tipo global
        
        function obtenerColorAleatorio() {
                var letters = '0123456789ABCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[Math.round(Math.random() * 15)];
                }
                return color;
            }

        
        function aparecerForma()
        {
            //genero tamaños y posiciones aleatorias
            var top = Math.random()*400;
            var left = Math.random()*400;
            var width = (Math.random()*200)+100; //+100 para que la anchura minima sea de 100
            var colorAleatorio = obtenerColorAleatorio();
            
            //cambiar la forma
            if (Math.random()>0.5)
                {   document.getElementById("forma").style.borderRadius = "50%";
                }
            else
                {document.getElementById("forma").style.borderRadius = "0%";  
                }
            
            document.getElementById("forma").style.display = "block";
            document.getElementById("forma").style.top = top;
            document.getElementById("forma").style.left = left;
            document.getElementById("forma").style.width = width;
            document.getElementById("forma").style.height= width; document.getElementById("forma").style.backgroundColor = colorAleatorio; 
            
            inicio= new Date().getTime();
        }
        
        function aparecerFormaDespuesDeRetraso()
        {
            setTimeout(aparecerForma, Math.random()*3000)
        }
        aparecerFormaDespuesDeRetraso();
        document.getElementById("forma").onclick = function() 
        {
            document.getElementById("forma").style.display = "none";
            var fin = new Date().getTime(); //nos da el tiempo hasta que seleccione
            var diferecia = (fin-inicio)/1000;
            document.getElementById("tiempoReaccion").innerHTML = diferecia + "s";
            aparecerFormaDespuesDeRetraso();
        }