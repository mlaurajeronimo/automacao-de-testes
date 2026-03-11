const Pessoa = require('../src/pessoa');

describe('Pessoa', () => {
  describe('Constructor', () => {
    test('deve criar uma pessoa com nome e idade', () => {
      const pessoa = new Pessoa('Maria', 25);
      expect(pessoa.nome).toBe('Maria');
      expect(pessoa.idade).toBe(25);
    });

    test('deve aceitar nomes com caracteres especiais', () => {
      const pessoa = new Pessoa('José da Silva', 30);
      expect(pessoa.nome).toBe('José da Silva');
    });

    test('deve aceitar idade 0', () => {
      const pessoa = new Pessoa('Recém-nascido', 0);
      expect(pessoa.idade).toBe(0);
    });

    test('deve aceitar idades altas', () => {
      const pessoa = new Pessoa('Idoso', 100);
      expect(pessoa.idade).toBe(100);
    });
  });

  describe('apresentar()', () => {
    test('deve retornar a apresentação correta', () => {
      const pessoa = new Pessoa('João', 28);
      const resultado = pessoa.apresentar();
      expect(resultado).toBe('Olá, meu nome é João e eu tenho 28 anos.');
    });

    test('deve incluir o nome correto na apresentação', () => {
      const pessoa = new Pessoa('Ana', 35);
      expect(pessoa.apresentar()).toContain('Ana');
    });

    test('deve incluir a idade correta na apresentação', () => {
      const pessoa = new Pessoa('Pedro', 42);
      expect(pessoa.apresentar()).toContain('42');
    });

    test('deve funcionar com idade 0', () => {
      const pessoa = new Pessoa('Bebê', 0);
      expect(pessoa.apresentar()).toBe('Olá, meu nome é Bebê e eu tenho 0 anos.');
    });
  });

  describe('atualizarIdade()', () => {
    test('deve atualizar a idade da pessoa', () => {
      const pessoa = new Pessoa('Carlos', 25);
      pessoa.atualizarIdade(26);
      expect(pessoa.idade).toBe(26);
    });

    test('deve atualizar a idade múltiplas vezes', () => {
      const pessoa = new Pessoa('Lúcia', 20);
      pessoa.atualizarIdade(21);
      expect(pessoa.idade).toBe(21);
      pessoa.atualizarIdade(25);
      expect(pessoa.idade).toBe(25);
    });

    test('deve refletir a nova idade na apresentação após atualização', () => {
      const pessoa = new Pessoa('Roberto', 30);
      pessoa.atualizarIdade(31);
      expect(pessoa.apresentar()).toContain('31');
    });

    test('deve permitir atualizar para idade 0', () => {
      const pessoa = new Pessoa('Rafael', 50);
      pessoa.atualizarIdade(0);
      expect(pessoa.idade).toBe(0);
    });

    test('deve permitir atualizar para idades altas', () => {
      const pessoa = new Pessoa('Maurício', 60);
      pessoa.atualizarIdade(120);
      expect(pessoa.idade).toBe(120);
    });
  });

  describe('Integração', () => {
    test('deve atualizar idade e apresentar corretamente', () => {
      const pessoa = new Pessoa('Fernanda', 27);
      expect(pessoa.apresentar()).toBe('Olá, meu nome é Fernanda e eu tenho 27 anos.');
      
      pessoa.atualizarIdade(28);
      expect(pessoa.apresentar()).toBe('Olá, meu nome é Fernanda e eu tenho 28 anos.');
    });
  });
});
