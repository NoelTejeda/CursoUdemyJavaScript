//yinyleon yinileon
/**
 * javascript ejecuta todo su código en un solo proceso, esto implica que si se necesita hacer un proceso demasiado extenso, como traer datos de una base de datos que son demasiados, se puede detener todo el flujo del programa para esto existe el asincronismo.
 * 
 * Asincronismo: permite delegar esos procesos extensos a subprocesos que se van a encargar de resolver esa tarea y después volver al proceso principal, a este modelo de concurrencia se le conoce como "NO BLOQUEANTE" puesto que cualquier tarea que ingrese demasiado pesada va a ser designada, mientras, nuestro programa sigue ejecutandose, una vez que termine revisa los procesos los ejecuta y de esa forma no existe ningún tipo de bloqueo dentro de nuestro software escrito con javascript. este proceso se conoce como "EVENT LOOP".
 * 
 * EL EVENT LOOP va a encargarse de ejecutar cada una de las tareas, estas tareas van a ser apiladas en un evento llamado "EVENT QUEUE (cola de evento", esta cola de evento va a ser la encargada de enviar cada evento al "EVENT LOOP" para que event loop lo ejecute.
 * 
 * Cuando hay un proceso muy pesado el "event loop" creara otro hilo (pila) llamada "THREAD POOL" resolverá la tarea más extensa. mientras que "event loop" seguirá despachando las tareas del "EVENT QUEUE"
 * 
 * Una vez finalizadas las tareas del event queue,  el event loop verificará el thread pool verificando si las tareas han sido cumplidas, si han sido cumplidas se moveran al event queue para posteriormente el event loop despacharla. (ver imagen guardada)
 * 
 * 
 * se le dice "NO BLOQUEANTE" porque si un proceso es muy pesado continuará con el siguiente, no tiene orden.
 * 
 */