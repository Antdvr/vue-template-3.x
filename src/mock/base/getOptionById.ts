import { promiser, resolver, worker, rester } from '@/mock/setup'
import { http, HttpResponse } from 'msw'

const tag = '查询 Option 下拉框'
const url = resolver('/base/getOptionById')

worker.use(
  http.post(url, async req => {
    const body = await rester.body(req)
    const query = await rester.query(req)
    const params = await rester.params(req)
    const printer = await rester.printer(tag)

    let resource: any = null

    switch (body && body.id) {
      case 'dept': {
        resource = {
          code: '0000',
          message: null,
          result: [
            { label: '公司部', parentId: '101.100.131', value: '101.100.131.5126' },
            { label: '采购部', parentId: '101.100.131', value: '101.100.131.5128' },
            { label: '市场部', parentId: '101.100.131', value: '101.100.131.5129' },
            { label: '运维部', parentId: '101.100.131', value: '101.100.131.5130' },
            { label: '系统部', parentId: '101.100.131', value: '101.100.131.5131' },
            { label: '软件部', parentId: '101.100.131', value: '101.100.131.5132' },
            { label: '大数据中心', parentId: '101.100.131', value: '101.100.131.5133' },
            { label: '研发中心', parentId: '101.100.131', value: '101.100.131.5135' }
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
