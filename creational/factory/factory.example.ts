abstract class MeasurementDeviceCreator {
  // Factory method
  abstract createMeasurementDevice(): MeasurementDevice;

  public createDevice() {
    // Call the factory method
    const createdMeasurementDevice = this.createMeasurementDevice();

    console.log(
      "createdMeasurementDevice.battery",
      createdMeasurementDevice.battery,
    );
    console.log(
      "createdMeasurementDevice.measurementType",
      createdMeasurementDevice.measurementType,
    );

    createdMeasurementDevice.measure();
  }
}

// Type of product Subclasses of MeasurementDeviceCreator
// will have different implementations and properties
// of the MeasurementDevice
interface MeasurementDevice {
  battery: string;
  measurementType: string;
  measure(): void;
}

// Product-A creator
class BloodPressureMeasurementDeviceCreator extends MeasurementDeviceCreator {
  createMeasurementDevice(): MeasurementDevice {
    return new BloodPressureMeasurementDevice();
  }
}

// Product-A
class BloodPressureMeasurementDevice implements MeasurementDevice {
  battery: string = "10";
  measurementType: string = "BloodPressure";
  measure(): void {
    console.log("Blood pressure measurement callback executed");
  }
}

// Product-B creator
class HeartRateDeviceCreator extends MeasurementDeviceCreator {
  createMeasurementDevice(): MeasurementDevice {
    return new HeartRateMeasurementDevice();
  }
}

// Product-B
class HeartRateMeasurementDevice implements MeasurementDevice {
  battery: string = "15";
  measurementType: string = "Heart rate";
  measure(): void {
    console.log("Heart rate measurement callback executed");
  }
}

const bpDevice = new BloodPressureMeasurementDeviceCreator();
const heartRateDevice = new HeartRateDeviceCreator();

console.log(heartRateDevice.createDevice());
