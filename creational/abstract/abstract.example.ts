interface CreateObservationFactory {
  createHeartRateObservation(): HeartRateObservationOne;
  createBloodPressureObservation(): BloodPressureObservationOne;
}

class CreateObservationFactoryOne implements CreateObservationFactory {
  createHeartRateObservation(): HeartRateObservationOne {
    return new HeartRateObservationOne();
  }

  createBloodPressureObservation(): BloodPressureObservationOne {
    return new BloodPressureObservationOne();
  }
}

class CreateObservationFactoryTwo implements CreateObservationFactory {
  createHeartRateObservation(): HeartRateObservationOne {
    return new HeartRateObservationOne();
  }

  createBloodPressureObservation(): BloodPressureObservationOne {
    return new BloodPressureObservationTwo();
  }
}

interface IHeartRateObservation {
  heartRate: number;
  identify(): void;
}

interface IBloodPressureObservation {
  systolic: number;
  diastolic: number;
  heartRate: number;
  identify(): void;
  renderHeartRate(heartRate: IHeartRateObservation): string;
}

class HeartRateObservationOne implements IHeartRateObservation {
  heartRate: number = 70;
  identify(): void {
    console.log("This is heart rate observation");
  }
}

class HeartRateObservationTwo implements IHeartRateObservation {
  heartRate: number = 50;
  identify(): void {
    console.log("This is second heart rate observation");
  }
}

class BloodPressureObservationOne implements IBloodPressureObservation {
  diastolic = 120;
  systolic = 70;
  heartRate = 75;
  identify(): void {
    console.log("This is blood pressure one observation");
  }
  renderHeartRate(heartRate: IHeartRateObservation): string {
    return `this is my collaborator heart rate val=>${heartRate.heartRate}\nthis is my heart rate val=>${this.heartRate}`;
  }
}

class BloodPressureObservationTwo implements IBloodPressureObservation {
  diastolic = 125;
  systolic = 75;
  heartRate = 80;
  identify(): void {
    console.log("This is blood pressure two observation");
  }
  renderHeartRate(heartRate: IHeartRateObservation): string {
    return `this is my collaborator heart rate val=>${heartRate.heartRate}\nthis is my heart rate val=>${this.heartRate}`;
  }
}

// Creator factory one
const createObservationFactoryOne = new CreateObservationFactoryOne();

const heartRateObservationOne =
  createObservationFactoryOne.createHeartRateObservation();

const bloodPressureObservationOne =
  createObservationFactoryOne.createBloodPressureObservation();

console.log(heartRateObservationOne.heartRate);
heartRateObservationOne.identify();

// Print properties
console.log(bloodPressureObservationOne.systolic);
console.log(bloodPressureObservationOne.diastolic);
console.log(bloodPressureObservationOne.heartRate);

bloodPressureObservationOne.identify();

// Collaborate with heart rate family
console.log(
  bloodPressureObservationOne.renderHeartRate(heartRateObservationOne),
);

// Creator factory two
const createObservationFactoryTwo = new CreateObservationFactoryTwo();

const heartRateObservationTwo =
  createObservationFactoryTwo.createHeartRateObservation();

const bloodPressureObservationTwo =
  createObservationFactoryTwo.createBloodPressureObservation();

console.log(heartRateObservationTwo.heartRate);
heartRateObservationTwo.identify();

// Print properties
console.log(bloodPressureObservationTwo.systolic);
console.log(bloodPressureObservationTwo.diastolic);
console.log(bloodPressureObservationTwo.heartRate);

bloodPressureObservationTwo.identify();

console.log(
  bloodPressureObservationTwo.renderHeartRate(heartRateObservationTwo),
);
