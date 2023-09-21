$(document).ready(function(){
    document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    })
    $(".btn2").on("click",function(){
        $(".btn2").css("display","none")
        $(".btn1").css("display","block")
        $("#pass").attr("type","text")

    })
    $(".btn1").on("click",function(){
        $(".btn1").css("display","none")
        $(".btn2").css("display","block")
        $("#pass").attr("type","password")
    
    })
    $('#check').change(function() { 
        if(this.checked) { 
            $("#pass").attr("type","password")
        }else if(!this.checked){
            $("#pass").attr("type","text")
        }
    })

})
