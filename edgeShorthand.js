// Edge Animate shorthand

(function( $ ){

	$.fn.getSymbol = function(sym) {
					
			//Checks that Edge's runtime has loaded
			if ($.Edge && $.Edge.symbol && $.Edge.symbol.get && $.Edge.symbol.get(this) && $.Edge.symbol.get(this).stop )
			{
				if(!sym){
					return $.Edge.symbol.get(this) // if no symbol was found, return the stage
				}
				else if( $.Edge.symbol.get(this).getSymbol(sym) && $.Edge.symbol.get(this).getSymbol(sym).stop){
					return $.Edge.symbol.get(this).getSymbol(sym)
				}
				
				return false
				
			}
			else
			{
				return false
			}	
	};
	
})( jQuery );


