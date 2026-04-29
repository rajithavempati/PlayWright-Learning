import { faker } from '@faker-js/faker';

export function randomInt(min = 1, max = 9999) {
  if (min > max) {
    throw new Error('min cannot be greater than max');
  }
  return faker.number.int({ min, max });
}

export function randomAlpha(length = 8) {
  if (length <= 0) {
    throw new Error('length must be greater than 0');
  }
  return faker.string.alpha({ length, casing: 'lower' });
}

export function randomAlphaNumeric(length = 8) {
  if (length <= 0) {
    throw new Error('length must be greater than 0');
  }
  return faker.string.alphanumeric(length).toLowerCase();
}

export function randomEmail(domain = 'example.test') {
  const local = `${faker.person.firstName()}.${faker.person.lastName()}.${faker.number.int({ min: 100, max: 999 })}`;
  return `${local.toLowerCase()}@${domain}`;
}

export function randomPhoneNumber(length = 10) {
  if (length < 6) {
    throw new Error('phone number length must be at least 6');
  }
  return faker.string.numeric(length);
}

export function uniqueId(prefix = 'id') {
  return `${prefix}-${Date.now()}-${faker.number.int({ min: 100, max: 999 })}`;
}

export function futureDate(daysFromToday = 0) {
  const date = new Date();
  date.setDate(date.getDate() + daysFromToday);
  return date.toISOString().split('T')[0];
}

export function buildEmployeeData(overrides = {}) {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    employeeId: faker.number.int({ min: 1000, max: 9999 }).toString(),
    email: randomEmail('hrm.test'),
    ...overrides,
  };
}

export function buildJobTitleData(overrides = {}) {
  return {
    jobTitle: `${faker.person.jobTitle()} ${faker.number.int({ min: 1, max: 99 })}`,
    jobDescription: faker.lorem.sentence(),
    note: faker.lorem.words({ min: 4, max: 8 }),
    ...overrides,
  };
}

export function createDataSet(factoryFn, count = 1) {
  if (typeof factoryFn !== 'function') {
    throw new Error('factoryFn must be a function');
  }
  if (count <= 0) {
    throw new Error('count must be greater than 0');
  }

  return Array.from({ length: count }, (_, index) => factoryFn(index));
}
