const months = {
	"01": "Jan",
	"02": "Feb",
	"03": "Mar",
	"04": "Apr",
	"05": "May",
	"06": "Jun",
	"07": "Jul",
	"08": "Aug",
	"09": "Sep",
	"10": "Oct",
	"11": "Nov",
	"12": "Dec",
};

const convertDate = (date: string) => {
	const formattedDate = date.substring(0, date.indexOf("T")).split("-");

	let resultDate = formattedDate[2];

	(Object.keys(months) as (keyof typeof months)[]).forEach((m) => {
		if (m == formattedDate[1]) {
			resultDate = resultDate + ` ${months[m]}`;
		}
	});

	return resultDate + ` ${formattedDate[0]}`;
};

export default convertDate;
