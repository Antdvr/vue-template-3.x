import { promiser, resolver, worker, rester } from '@/mock/setup'
import { http, HttpResponse } from 'msw'

const tag = '获取组织 Tree 列表'
const url = resolver('/organize/getOrganizeInfoTree')

worker.use(
  http.post(url, async req => {
    const body = await rester.body(req)
    const query = await rester.query(req)
    const params = await rester.params(req)
    const printer = await rester.printer(tag)

    let resource: any = null

    switch (body && body.params && body.params.orgId) {
      case '0': {
        resource = {
          code: '0000',
          message: null,
          result: [
            {
              key: '1',
              isOrg: 'Y',
              isLeaf: false,
              title: '杰耘投资集团有限公司',
              orgShortName: '杰耘集团'
            }
          ]
        }
        break
      }
      case '1': {
        resource = {
          code: '0000',
          message: null,
          result: [
            {
              key: '101.100',
              isOrg: 'Y',
              isLeaf: false,
              title: '杰耘投资发展有限公司',
              orgShortName: '杰耘母公司'
            }
          ]
        }
        break
      }
      case '101.100': {
        resource = {
          code: '0000',
          message: null,
          result: [
            {
              key: '101.100.131',
              isOrg: 'Y',
              isLeaf: true,
              title: '杰耘网盾平台',
              orgShortName: '杰耘网盾'
            },
            {
              key: '101.100.138',
              isOrg: 'Y',
              isLeaf: true,
              title: '杰耘采购平台',
              orgShortName: '杰耘采购'
            }
          ]
        }
        break
      }
      default: {
        resource = {
          code: '0000',
          message: null,
          result: []
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
