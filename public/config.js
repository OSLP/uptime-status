// 配置
window.Config = {

  // 站点名
  SiteName: 'Uptime Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  // 1JAW 2XUEXI 3JAW.DNS 4STATUS.PAGE 5ARKtool 6CDN.JAW
  ApiKeys: [
    'm784577102-ba0955164545eab951e91d58',
    'm784569970-990b69b8a7effdf0dd0f1d53',
    'm784577101-a12813e72dded6817d9223c7',
    'm784577103-12b6a324ecf12b3123b40ce2',
    'm784577119-a8256038a88223a501953ca2',
    'm784577121-348d0921073ccb8efe3c8ecf',
    
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Contact',
      url: 'https://bili.icu'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/Niksend/uptimerobot-statuskit'
    }
  ]
};
