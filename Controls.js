export CONTROLS = {
	UP: 'w',
	DOWN: 's',
	LEFT: 'a',
	RIGHT: 'd',
	FIRE: ' '
}

export function SetupControls() {

    document.addEventListener('keydown', function(event) {
        if(event.key == controls.LEFT) {
            alert('Left was pressed');
        }
        if(event.key == controls.RIGHT) {
            alert('Right was pressed');
        }
        if(event.key == controls.UP) {
            alert('Up was pressed');
        }
        if(event.key == controls.DOWN) {
            alert('Down was pressed');
        }
        if(event.key == controls.FIRE) {
            alert('Space was pressed');
        }
    });

}

export default CONTROLS;