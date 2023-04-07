import Styled from "styled-components";

const AnalysisView = props => {
	return (
		<div style={css.scrollContainer}>
			<css.MainBox style={css.mainBox}>
				asdfdsf
			</css.MainBox>
		</div>
	);
}

const css = {
	MainBox: Styled.div`
		width: 100%;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
		transition: 0.3s;
		background-color: #ffffff;
		/*border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;*/
		margin-bottom: 10px;

		@media only screen and (max-width: 1279px) { height: 1058px; }
		@media only screen and (min-width: 1279px) { height: 762px; }
		@media only screen and (min-width: 1535px) { height: 733px; }
		@media only screen and (min-width: 1727px) { height: 711px; }
		@media only screen and (min-width: 1786px) { height: 691px; }
	`,
	scrollContainer: {
		marginLeft: "2px",
		overflow: "scroll",
		height: "100%"
	}
}

export default AnalysisView;
