
async function update() {
    console.log("map is update")
    // fetch("data2.json")
    await fetch("data.json")
        .then(res => res.json())
        .then(resp => {
            // console.log(rsp.data)
            resp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                cases = element.infected;
                if (cases > 265) {
                    color = "red"
                }
                else {
                    color = `rgb(${cases}, 0, 0)`
                }
                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,

                    color: color
                }).setLngLat([longitude, latitude])
                    .addTo(map);
            });

        })
    // .then(resp=>{
    //     console.log(resp.pollution)
    // })
}
// inter=4000
// setInterval(update,inter)
update()