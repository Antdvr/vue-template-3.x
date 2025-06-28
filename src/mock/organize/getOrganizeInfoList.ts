import { promiser, resolver, worker, rester } from '@/mock/setup'
import { http, HttpResponse } from 'msw'

const tag = '分页查询组织列表'
const url = resolver('/organize/getOrganizeInfoList')

worker.use(
  http.post(url, async req => {
    const body = await rester.body(req)
    const query = await rester.query(req)
    const params = await rester.params(req)
    const printer = await rester.printer(tag)

    let resource: any = null

    switch (body && body.params && body.params.orgId) {
      case '1': {
        resource = {
          code: '0000',
          message: null,
          result: {
            data: [
              {
                key: '1',
                isOrg: 'Y',
                isLeaf: false,
                title: '杰耘投资集团有限公司',
                orgShortName: '杰耘集团',
                parentOrgId: '0',
                parentOrgName: '',
                activity: 'Y'
              },
              {
                key: '101.100',
                isOrg: 'Y',
                isLeaf: false,
                title: '杰耘投资发展有限公司',
                orgShortName: '杰耘母公司',
                parentOrgId: '1',
                parentOrgName: '杰耘投资集团有限公司',
                activity: 'Y'
              }
            ],
            pageNo: 1,
            pageSize: 20,
            totalSize: 2,
            totalPage: 1
          }
        }
        break
      }
      case '101.100': {
        resource = {
          code: '0000',
          message: null,
          result: {
            data: [
              {
                key: '101.100',
                isOrg: 'Y',
                isLeaf: false,
                title: '杰耘投资发展有限公司',
                orgShortName: '杰耘母公司',
                parentOrgId: '1',
                parentOrgName: '杰耘投资集团有限公司',
                activity: 'Y'
              },
              {
                key: '101.100.131',
                isOrg: 'Y',
                isLeaf: false,
                title: '杰耘网盾平台',
                orgShortName: '杰耘网盾',
                parentOrgId: '101.100',
                parentOrgName: '杰耘投资发展有限公司',
                activity: 'Y'
              },
              {
                key: '101.100.138',
                isOrg: 'Y',
                isLeaf: false,
                title: '杰耘采购平台',
                orgShortName: '杰耘采购',
                parentOrgId: '101.100',
                parentOrgName: '杰耘投资发展有限公司',
                activity: 'Y'
              }
            ],
            pageNo: 1,
            pageSize: 20,
            totalSize: 3,
            totalPage: 1
          }
        }
        break
      }
      case '101.100.131': {
        resource = {
          code: '0000',
          message: null,
          result: {
            data: [
              {
                key: '101.100.131',
                isOrg: 'Y',
                isLeaf: false,
                title: '杰耘网盾平台',
                orgShortName: '杰耘网盾',
                parentOrgId: '101.100',
                parentOrgName: '杰耘投资发展有限公司',
                activity: 'Y'
              },
              {
                key: '101.100.131.5126',
                isOrg: 'N',
                isLeaf: true,
                title: '公司部',
                orgShortName: '',
                activity: 'Y'
              },
              {
                key: '101.100.131.5127',
                isOrg: 'N',
                isLeaf: true,
                title: '人事部',
                orgShortName: '',
                activity: 'Y'
              },
              {
                key: '101.100.131.5128',
                isOrg: 'N',
                isLeaf: true,
                title: '采购部',
                orgShortName: '',
                activity: 'Y'
              },
              {
                key: '101.100.131.5129',
                isOrg: 'N',
                isLeaf: true,
                title: '市场部',
                orgShortName: '',
                activity: 'Y'
              },
              {
                key: '101.100.131.5130',
                isOrg: 'N',
                isLeaf: true,
                title: '运维部',
                orgShortName: '',
                activity: 'Y'
              },
              {
                key: '101.100.131.5131',
                isOrg: 'N',
                isLeaf: true,
                title: '系统部',
                orgShortName: '',
                activity: 'Y'
              },
              {
                key: '101.100.131.5132',
                isOrg: 'N',
                isLeaf: true,
                title: '开发部',
                orgShortName: '',
                activity: 'Y'
              },
              {
                key: '101.100.131.5133',
                isOrg: 'N',
                isLeaf: true,
                title: '大数据中心',
                orgShortName: '',
                activity: 'Y'
              },
              {
                key: '101.100.131.5134',
                isOrg: 'N',
                isLeaf: true,
                title: '技术中心',
                orgShortName: '',
                activity: 'Y'
              },
              {
                key: '101.100.131.5135',
                isOrg: 'N',
                isLeaf: true,
                title: '研发中心',
                orgShortName: '',
                activity: 'Y'
              },
              {
                key: '101.100.131.5136',
                isOrg: 'N',
                isLeaf: true,
                title: '后勤中心',
                orgShortName: '',
                activity: 'Y'
              }
            ],
            pageNo: 1,
            pageSize: 20,
            totalSize: 13,
            totalPage: 1
          }
        }
        break
      }
      case '101.100.138': {
        resource = {
          code: '0000',
          message: null,
          result: {
            data: [
              {
                key: '101.100.138',
                isOrg: 'Y',
                isLeaf: false,
                title: '杰耘采购平台',
                orgShortName: '杰耘采购',
                parentOrgId: '101.100',
                parentOrgName: '杰耘投资发展有限公司',
                activity: 'Y'
              }
            ],
            pageNo: 1,
            pageSize: 20,
            totalSize: 1,
            totalPage: 1
          }
        }
        break
      }
      default: {
        resource = {
          code: '0000',
          message: null,
          result: {
            data: [],
            pageNo: 1,
            pageSize: 20,
            totalSize: 0,
            totalPage: 0
          }
        }
      }
    }

    printer(log => {
      log('[body] - ', body)
      log('[query] - ', query)
      log('[params] - ', params)
      log('[resource] - ', resource)
    })

    return promiser(
      HttpResponse.json(resource),
      0
    )
  })
)
