const fecs = [
  {
    id: 1,
    type: "TEXT_FIELD",
    name: "propertyName",
    state: "Project Name",
    required: true,
    validation: "MIN_LENGTH:3",
    default: "This is P1."
  },
  {
    id: 2,
    type: "SELECT",
    name: "zone",
    state: "Zone",
    lookupTypeId: 25,
    required: true
  },
  {
    id: 3,
    type: "TEXT_FIELD",
    name: "referencedPropertyName",
    state: "Post-Construction Site",
    readOnly: true
  }
];
