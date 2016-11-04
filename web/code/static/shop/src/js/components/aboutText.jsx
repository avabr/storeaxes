var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');

var AboutText = React.createClass({
	getInitialState: function () {
		return {
			address: AppStore.getState().address
		};
	},
	componentDidMount: function () {
		AppStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
	_onChange: function () {
		this.setState({address: AppStore.getState().address});
	},
	render: function () {
		if (this.state.address == null) {
			return (
				<div className="about-us container">
		            <div className="row">
		                <div className="about-us-text span12">
		                    <p>Мастерская "ТАЙГА" производит профессиональный кованный инструмент в древних традициях по современным технологиям, высокого качества исполнения для ручной работы и долгих лет службы! Мы изготавливаем трехслойные кузнечные топоры, колуны, топоры из дамасской стали, тесла, дамасские ножи, скобеля... Наша мастерская начала свое производство с 2012 года имея большой опыт работы. Во главе своего производства мы ставим Качество и современный дизайн изделий, всегда предоставляем высокие гарантии и гибкий подход клиентам. Наш интернет магазин работает как в розницу,так и с оптовыми покупателями предоставляя выгодные условия. По мере развития и увеличения производства стараемся снижать цены,только не за счет качества инструмента. Так же в полной мере работаем с индивидуальными заказами и учитываем все пожелания покупателей.</p>
		                    <p>ИП-Верескунов Иван Александрович</p>
		                </div>
		            </div>
		        </div>
			);
		}
		else if (this.state.address !== null) {
			return (
				<div className="about-us container">
		            <div className="row">
		                <div className="about-us-text span12">
		                   <p>Мастерская "ТАЙГА" производит профессиональный кованный инструмент в древних традициях по современным технологиям, высокого качества исполнения для ручной работы и долгих лет службы! Мы изготавливаем трехслойные кузнечные топоры, колуны, топоры из дамасской стали, тесла, дамасские ножи, скобеля... Наша мастерская начала свое производство с 2012 года имея большой опыт работы. Во главе своего производства мы ставим Качество и современный дизайн изделий, всегда предоставляем высокие гарантии и гибкий подход клиентам. Наш интернет магазин работает как в розницу,так и с оптовыми покупателями предоставляя выгодные условия. По мере развития и увеличения производства стараемся снижать цены,только не за счет качества инструмента. Так же в полной мере работаем с индивидуальными заказами и учитываем все пожелания покупателей.</p>
		                    <p>ИП-Верескунов Иван Александрович</p>
		                </div>
		            </div>
		        </div>
			);
		}
	}
});

module.exports = AboutText;