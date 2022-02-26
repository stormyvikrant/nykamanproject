var arr =[
    "https://images-static.nykaa.com/uploads/7468d981-d2f9-49ba-b99b-ce77646884cb.gif?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/3aa39538-16a4-4d06-9182-4d2c0216f5c8.png?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/4fe9cb90-6094-4644-8d35-c9d1adca4b09.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/6c645557-8514-4ead-88ff-ec32b023013d.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/002fe602-b4d7-44bc-b4b8-941d419da217.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/687db989-43c6-47b4-a560-d6ae2ecb0cd8.jpg?tr=w-1200,cm-pad_resize"
    
  ]
  
  var i = 0;
  
  setInterval(function () {
    var arr_img = arr;
    var img = document.getElementById("a4");
  
    if (i == arr_img.length) {
      i = 0;
    }
    img.src = arr_img[i];
    i++;
  }, 3000);
