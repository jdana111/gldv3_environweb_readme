    masterSetting: false,
    hubConfig[0] = { tabs: [
      {
        id: 0,
        tabLabel: 'Inspection',
        tabAbbreviation: 'INSP',
        datasetSingular: 'inspection',
        datasetPlural: 'inspections',
        columns: [
          {
            field: 'id',
            headerName: 'ID',
            widths: { sm: 100, md: 150, lg: 180 },
          },
          {
            field: 'inspectionDateTime',
            headerName: 'Date / Time',
            dateTimeFormat: 'MM/DD/YYYY hh:mm A',
            widths: { sm: 100, md: 150, lg: 180 },
          },
          {
            field: 'inspectorName',
            headerName: 'Inspector',
            widths: { sm: 100, md: 150, lg: 180 },
          },
          {
            field: 'inspectionTypeName',
            headerName: 'Inspection Type',
            widths: { sm: 100, md: 150, lg: 180 },
          },
          {
            field: 'notes',
            headerName: 'Notes',
            widths: { sm: 0, md: 0, lg: 180 },
          },
        ],
      },
      {
        id: 1,
        tabLabel: 'Asset',
        tabAbbreviation: 'ASST',
        datasetSingular: 'asset',
        datasetPlural: 'assets',
        columns: [
          {
            field: 'id',
            headerName: 'ID',
            widths: { sm: 100, md: 150, lg: 180 },
          },
          {
            field: 'assetTypeName',
            headerName: 'Asset Type',
            widths: { sm: 100, md: 150, lg: 180 },
          },
          {
            field: 'assetStatusName',
            headerName: 'Asset Status',
            widths: { sm: 100, md: 150, lg: 180 },
          },
          {
            field: 'location',
            headerName: 'Location',
            widths: { sm: 100, md: 150, lg: 180 },
          },
          {
            field: 'notes',
            headerName: 'Notes',
            widths: { sm: 0, md: 0, lg: 180 },
          },
        ],
      },
      {
        id: 2,
        tabLabel: 'Contact',
        tabAbbreviation: 'CONT',
        datasetSingular: 'contact',
        datasetPlural: 'contacts',
        columns: [
          {
            field: 'id',
            headerName: 'ID',
            widths: { sm: 100, md: 150, lg: 180 },
          },
          {
            field: 'lastName',
            headerName: 'Last Name',
            widths: { sm: 100, md: 150, lg: 180 },
          },
          {
            field: 'firstName',
            headerName: 'First Name',
            widths: { sm: 100, md: 150, lg: 180 },
          },
          {
            field: 'contactTypeName',
            headerName: 'Contact Type',
            widths: { sm: 100, md: 150, lg: 180 },
          },
          {
            field: 'emailAddress',
            headerName: 'Email Address',
            widths: { sm: 100, md: 150, lg: 180 },
          },
          {
            field: 'notes',
            headerName: 'Notes',
            widths: { sm: 0, md: 0, lg: 180 },
          },
        ],
      },
      {
        id: 3,
        tabLabel: 'Permits',
        tabAbbreviation: 'PRMT',
        datasetSingular: 'permitHistory',
        datasetPlural: 'permitHistory',
        columns: [
          {
            field: 'id',
            headerName: 'ID',
            widths: { sm: 100, md: 150, lg: 180 },
          },
          {
            field: 'permitStatusDate',
            headerName: 'Permit Status Date',
            type: 'date',
            widths: { sm: 100, md: 150, lg: 180 },
          },
          {
            field: 'permitStatus',
            headerName: 'Permit Status',
            widths: { sm: 100, md: 150, lg: 180 },
          },
          {
            field: 'notes',
            headerName: 'Notes',
            widths: { sm: 0, md: 0, lg: 180 },
          },
        ],
      },
    ],
  }