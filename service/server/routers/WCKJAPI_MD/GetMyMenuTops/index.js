
module.exports = function (router) {
    router.get('/GetMyMenuTops', async (ctx) => {
        ctx.body = JSON.stringify(
            msg
        )
    })
    
}


const msg = {
    "success": true,
    "code": 0,
    "message": "成功",
    "data": [
      {
        "MID": "5e3413e4-4203-40a0-9cab-f1914a0a90ea",
        "MNAME": "信息门户",
        "PMID": null,
        "URL": "",
        "SORT": 10,
        "ICON": "icon-office",
        "EXTEND": "mainNavigator_Portal",
        "UID": "174a27b4-669d-44fc-a2fa-d115d020c027",
        "ISPARENT": 1
      },
      {
        "MID": "d1a32819-72f6-4d5f-9148-e54dff2ed097",
        "MNAME": "综合办公",
        "PMID": null,
        "URL": "",
        "SORT": 11,
        "ICON": "icon-bangong",
        "EXTEND": "mainNavigator_Office",
        "UID": "174a27b4-669d-44fc-a2fa-d115d020c027",
        "ISPARENT": 1
      },
      {
        "MID": "62337cc5-c90b-479f-bffa-4ad7d38443be",
        "MNAME": "政工管理",
        "PMID": null,
        "URL": "",
        "SORT": 12,
        "ICON": "icon-zhengwu",
        "EXTEND": "mainNavigator_Politics",
        "UID": "174a27b4-669d-44fc-a2fa-d115d020c027",
        "ISPARENT": 1
      },
      {
        "MID": "bc780d34-caad-412c-a375-31b21a3ffa6b",
        "MNAME": "人力资源",
        "PMID": null,
        "URL": "",
        "SORT": 13,
        "ICON": "icon-personnel1",
        "EXTEND": "mainNavigator_HR",
        "UID": "174a27b4-669d-44fc-a2fa-d115d020c027",
        "ISPARENT": 1
      },
      {
        "MID": "f72c73b8-8813-437e-bea2-2cdd5e626e91",
        "MNAME": "财务管理",
        "PMID": null,
        "URL": "",
        "SORT": 14,
        "ICON": "icon-money",
        "EXTEND": "mainNavigator_Financetest",
        "UID": "174a27b4-669d-44fc-a2fa-d115d020c027",
        "ISPARENT": 1
      },
      {
        "MID": "d4d8af1c-903a-4c90-a53d-364805930adb",
        "MNAME": "资产管理",
        "PMID": null,
        "URL": "",
        "SORT": 15,
        "ICON": "icon-assets",
        "EXTEND": "mainNavigator_Asset",
        "UID": "174a27b4-669d-44fc-a2fa-d115d020c027",
        "ISPARENT": 1
      },
      {
        "MID": "96f4f881-b645-4ae2-a233-c64e5cb20eed",
        "MNAME": "运营管理",
        "PMID": null,
        "URL": "",
        "SORT": 16,
        "ICON": "icon-pad",
        "EXTEND": "mainNavigator_Business",
        "UID": "174a27b4-669d-44fc-a2fa-d115d020c027",
        "ISPARENT": 1
      },
      {
        "MID": "784baf65-d1f3-40ff-80ce-bd993fb59aaa",
        "MNAME": "应急调度",
        "PMID": null,
        "URL": "",
        "SORT": 17,
        "ICON": "icon-map",
        "EXTEND": "mainNavigator_Emergency",
        "UID": "174a27b4-669d-44fc-a2fa-d115d020c027",
        "ISPARENT": 1
      },
      {
        "MID": "82101b01-199a-427d-92cf-2abced6ac861",
        "MNAME": "主数据库",
        "PMID": null,
        "URL": "",
        "SORT": 18,
        "ICON": "icon-data",
        "EXTEND": "mainNavigator_MasterData",
        "UID": "174a27b4-669d-44fc-a2fa-d115d020c027",
        "ISPARENT": 1
      }
    ]
  }