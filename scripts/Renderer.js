window.onload = function()
{
    var canvas = document.getElementById("viewport"); 
    var ctx = canvas.getContext("2d");

    var width = canvas.width;
    var height = canvas.height;

    var imagedata = ctx.createImageData(width, height);

    function createImage(offset)
    {
        for(var x = 0; x < width; x++)
        {
            for(var y = 0 ; y < height; y++)
            {
                var pixel_index = (y * width + x) * 4;

                var red = ((x+offset) % 256) ^ ((y+offset) % 256);
                var green = ((2*x+offset) % 256) ^ ((2*y+offset) % 256);
                var blue = 50 + Math.floor(Math.random()*100);
 
                // Rotate the colors
                blue = (blue + offset) % 256;
 
                // Set the pixel data
                imagedata.data[pixel_index] = red;     // Red
                imagedata.data[pixel_index+1] = green; // Green
                imagedata.data[pixel_index+2] = blue;  // Blue
                imagedata.data[pixel_index+3] = 255;   // Alpha
            }
        }
    }

    function main(tframe)
    {
        window.requestAnimationFrame(main);
        createImage(Math.floor(tframe / 10));
        ctx.putImageData(imagedata, 0, 0);
    }
    main(0);
}