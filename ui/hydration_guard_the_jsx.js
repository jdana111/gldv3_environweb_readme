{Array.isArray(hubConfig.tabs) &&
  hubConfig.tabs.map((t) => <Tab key={`tab:${t.id}`} label={t.tabLabel} />)}
