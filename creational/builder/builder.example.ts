interface IHardware {
  gpu: number;
  ram: number;
}

class Computer {
  hardware: IHardware = {
    gpu: 0,
    ram: 0,
  };
  // brand name of keyboard
  keyboard: string = "unknown";
  // brand name of mouse
  mouse: string = "unknown";
  // count of speakers
  speakers: number = 0;
  // size of monitor
  monitor: number = 0;

  printComputerParts(): void {
    console.table(this.hardware);
    console.table(
      `${this.keyboard} ${this.mouse} ${this.speakers} ${this.monitor}`,
    );
  }
}

class ComputerDocument {
  // Pretend as if these are all required fields for documentation
  hardware: IHardware = {
    gpu: 0,
    ram: 0,
  };
  // brand name of keyboard
  keyboard: string = "unknown";
  // brand name of mouse
  mouse: string = "unknown";
  // count of speakers
  speakers: number = 0;
  // size of monitor
  monitor: number = 0;

  printComputerParts(): void {
    console.table(this.hardware);
    console.table(
      `${this.keyboard} ${this.mouse} ${this.speakers} ${this.monitor}`,
    );
  }
}

class ComputerDocumentBuilder implements ComputerBuilder {
  private computerDocument: ComputerDocument = new ComputerDocument();

  reset(): void {
    this.computerDocument = new ComputerDocument();
  }

  setHardware(hardware: IHardware): void {
    this.computerDocument.hardware = hardware;
  }

  setKeyboard(keyboard: string): void {
    this.computerDocument.keyboard = keyboard;
  }

  setMouse(mouse: string): void {
    this.computerDocument.mouse = mouse;
  }

  setSpeakers(speakers: number): void {
    this.computerDocument.speakers = speakers;
  }

  setMonitor(monitor: number): void {
    this.computerDocument.monitor = monitor;
  }

  setGpu(gpu: number): void {
    this.computerDocument.hardware.gpu = gpu;
  }

  setRam(ram: number): void {
    this.computerDocument.hardware.ram = ram;
  }

  getProduct(): ComputerDocument {
    const computerDocument = this.computerDocument;
    this.reset();
    return computerDocument;
  }
}

interface ComputerBuilder {
  setGpu(gpu: number): void;
  setRam(ram: number): void;
  setKeyboard(brand: string): void;
  setMouse(brand: string): void;
  setSpeakers(count: number): void;
  setMonitor(size: number): void;
}

class ComputerBuilderOne implements ComputerBuilder {
  private computer: Computer = new Computer();

  constructor() {
    this.reset();
  }

  setGpu(gpu: number): void {
    this.computer.hardware.gpu = gpu;
  }

  setRam(ram: number): void {
    this.computer.hardware.ram = ram;
  }

  setKeyboard(brand: string): void {
    this.computer.keyboard = brand;
  }

  setMonitor(size: number): void {
    this.computer.monitor = size;
  }

  setMouse(brand: string): void {
    this.computer.mouse = brand;
  }

  setSpeakers(count: number): void {
    this.computer.speakers = count;
  }

  reset(): void {
    this.computer = new Computer();
  }

  getProduct(): Computer {
    const computer = this.computer;
    this.reset();
    return computer;
  }
}

class ComputerBuilderDirector {
  private builder: ComputerBuilder;

  constructor(builder: ComputerBuilder) {
    this.builder = builder;
  }

  buildComputer(): void {
    this.builder.setGpu(2);
    this.builder.setRam(4);
    this.builder.setKeyboard("Dell");
    this.builder.setMouse("Logitech");
    this.builder.setSpeakers(2);
    this.builder.setMonitor(15);
  }
}

const computerBuilderOne = new ComputerBuilderOne();

const computerBuilderDirector = new ComputerBuilderDirector(computerBuilderOne);

computerBuilderDirector.buildComputer();
computerBuilderOne.getProduct().printComputerParts();

const computerDocumentBuilder = new ComputerDocumentBuilder();

const computerBuilderDirectorTwo = new ComputerBuilderDirector(
  computerDocumentBuilder,
);

computerBuilderDirectorTwo.buildComputer();
computerDocumentBuilder.getProduct().printComputerParts();

computerDocumentBuilder.reset();

computerDocumentBuilder.getProduct().printComputerParts();
