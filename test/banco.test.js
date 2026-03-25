const Banco = require('../src/banco');

describe('Banco', () => {
	test('deve criar uma conta com saldo inicial e retornar saldo correto', () => {
		const conta = new Banco('Conta A', 50);
		expect(conta.obterSaldo()).toBe(50);
	});

	test('depositar e sacar atualizam o saldo corretamente', () => {
		const conta = new Banco('Conta B', 20);
		expect(conta.depositar(30)).toBe(50); // 20 + 30
		expect(conta.sacar(10)).toBe(40); // 50 - 10
		expect(conta.obterSaldo()).toBe(40);
	});

	test('transferir entre contas ajusta os saldos de origem e destino', () => {
		const origem = new Banco('Origem', 100);
		const destino = new Banco('Destino', 10);

		origem.transferir(40, destino);

		expect(origem.obterSaldo()).toBe(60); // 100 - 40
		expect(destino.obterSaldo()).toBe(50); // 10 + 40
	});

	test('sacar acima do saldo lança erro de saldo insuficiente', () => {
		const conta = new Banco('Conta C', 5);
		expect(() => conta.sacar(10)).toThrow('Saldo insuficiente');
	});
});

