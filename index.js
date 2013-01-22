enchant();
var speed = 6;
var motox =160;
var motoy =150;
var suuji = 0;

window.onload = function() {
    var game = new Game(320, 480);
    game.preload('http://jsrun.it/assets/q/5/F/o/q5Fo8.png');
    
    game.onload = function() {
        var scene = game.rootScene;
		scene.backgroundColor = "black";
        
        
        	var char1 = new Sprite(27, 27); //…⑦
   			char1.image = game.assets['http://jsrun.it/assets/q/5/F/o/q5Fo8.png'];
    	    char1.x = motox;
        	char1.y = motoy;
       	 	char1.frame = 0;
        　　          
        	char1.addEventListener(Event.ENTER_FRAME, function() { 
                suuji++;
                if(suuji > 7){
                    suuji = 0;
                }
                char1.frame = suuji;
                char1.x += speed;
            	
            });
            game.rootScene.addChild(char1);
             
    }; 
    game.start(); // ゲームスタート
};