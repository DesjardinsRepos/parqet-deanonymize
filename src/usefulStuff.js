import { createTheme } from '@material-ui/core/styles';

export const muiTheme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#36D6CA',
		},
	},
});

export const noSelect = {
	WebkitUserSelect: "none", /* Safari */
	MozUserSelect: "none", /* Firefox */
	MsUserSelect: "none", /* IE10+/Edge */
	UserSelect: "none"
}

export const particlesJsOptions = {
	background: {
	    color: {
	        value: "#1F2937",
	    },
	},
	fpsLimit: 60,
	interactivity: {
	    events: {
	        onClick: {
	            enable: true,
	            mode: "push",
	        },
	        onHover: {
	            enable: true,
	            mode: "repulse",
	        },
	        resize: true,
	    },
	    modes: {
	        push: {
	            quantity: 4,
	        },
	        repulse: {
	            distance: 200,
	            duration: 0.4,
	        },
	    },
	},
	particles: {
	    color: {
	        value: "#26B6AA",
	    },
	    links: {
	        color: "#26B6AA",
	        distance: 150,
	        enable: true,
	        opacity: 0.5,
	        width: 1,
	    },
	    collisions: {
	        enable: true,
	    },
	    move: {
	        directions: "none",
	        enable: true,
	        outModes: {
	            default: "bounce",
	        },
	        random: false,
	        speed: 1.5,
	        straight: false,
	    },
	    number: {
	        density: {
	            enable: true,
	            area: 800,
	        },
	        value: 80,
	    },
	    opacity: {
	        value: 0.5,
	    },
	    shape: {
	        type: "circle",
	    },
	    size: {
	        value: { min: 1, max: 5 },
	    },
	},
	detectRetina: true,
}
