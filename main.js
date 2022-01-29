function drawCoordinateSystem(length) {
    const basis = [
        [center, new BABYLON.Vector3(length, 0, 0)],
        [center, new BABYLON.Vector3(0, length, 0)],
        [center, new BABYLON.Vector3(0, 0, length)],
    ]

    const minusBasis = [
        [center, new BABYLON.Vector3(-length, 0, 0)],
        [center, new BABYLON.Vector3(0, -length, 0)],
        [center, new BABYLON.Vector3(0, 0, -length)],
    ]

    for (let i = 0; i < 3; i++){
        BABYLON.MeshBuilder.CreateLines("lines", {points: basis[i]});
        BABYLON.MeshBuilder.CreateLines("lines", {points: minusBasis[i], colors: linesGrayColor});

    }

    Writer = BABYLON.MeshWriter(scene, {scale:scale,defaultFont:"Arial"});
    xAxisText  = new Writer("x", {
        "letter-height": 5,
        "letter-thickness": 0.2,
        "position": {"x": length * 10}
    });

    yAxisText  = new Writer("y", {
        "letter-height": 3,
        "letter-thickness": 0.2,
        "position": {"y": length * 10}
    });

    zAxisText  = new Writer("z", {
        "letter-height": 5,
        "letter-thickness": 0.2,
        "position": {"z": length * 10}
    });
}