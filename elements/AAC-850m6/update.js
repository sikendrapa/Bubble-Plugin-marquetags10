function(instance, properties, context) {
    
    if(properties.direction_left==true){var elementVar = document.createElement("MARQUEE");
    var img1 = document.createElement("img");
                 img1.src = properties.image;
                 img1.setAttribute('alt', 'image');
                  img1.height = properties.height;
                 img1.width = properties.width;
            elementVar.appendChild(img1);
            document.body.appendChild(elementVar);
    
instance.publishState('result',img1);}
    
     if(properties.direction_right == true ){var elementVar = document.createElement("MARQUEE");
    var img1 = document.createElement("img");
                 img1.src = properties.image;
                 img1.setAttribute('alt', 'image');
                  img1.height = properties.height;
                 img1.width = properties.width;
            elementVar.appendChild(img1);
            document.body.appendChild(elementVar).direction="right";
    
instance.publishState('result',img1);}
    
     if(properties.direction_up == true ){var elementVar = document.createElement("MARQUEE");
    var img1 = document.createElement("img");
                 img1.src = properties.image;
                 img1.setAttribute('alt', 'image');
                  img1.height = properties.height;
                 img1.width = properties.width;
            elementVar.appendChild(img1);
            document.body.appendChild(elementVar).direction="up";
    
        instance.publishState('result',img1);}
    
      if(properties.direction_down == true ){var elementVar = document.createElement("MARQUEE");
              var img1 = document.createElement("img");
                 img1.src = properties.image;
                 img1.setAttribute('alt', 'image');
                  img1.height = properties.height;
                 img1.width = properties.width;
            elementVar.appendChild(img1);
            document.body.appendChild(elementVar).direction="down";
    
           instance.publishState('result',img1);}
    
      if(properties.behavior_alternate == true ){var elementVar = document.createElement("MARQUEE");
    var img1 = document.createElement("img");
                 img1.src = properties.image;
                 img1.setAttribute('alt', 'image');
                  img1.height = properties.height;
                 img1.width = properties.width;
            elementVar.appendChild(img1);
            document.body.appendChild(elementVar).behavior="alternate";
    
instance.publishState('result',img1);}
    

}

