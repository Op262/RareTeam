(function(){
    console.log('index.js loaded');
   getPosts();
   
})()

function getPosts(){
    $.ajax({
        method: "GET",
        url:`/api/posts`,
        success: (data) => {
            console.log(data);
            for(let i = 0; i < data.length; i++){
                let post = data[i];
                $('#pageList').append(`<li>
                name:   ${post.name1},  <br> Platform: ${post.q11}, <br> age:  ${post.q21} <br>
                Discord Name: ${post.dsnm1} <br> Season: ${post.season1} <br> input: ${post.q31} <br>
                Epic Games Username: ${post.epic1} <br> The Link Of RC : ${post.rc1}
                <br>
                --------------------------------------------------------------------------------
                </li>`)
            }
        }
    })
}


