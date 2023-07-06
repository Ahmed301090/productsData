const express = require("express");
const router = express.Router();
const myTest = [
  {
    id: 100001,
    name: "قسم ملابس الرجال ",
    products: [
      {
        id: 1,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482823/Jammal/MEN/ZZGx53DJl2hKNUlWwSJgtWomVAWJc86Mc3Wi5MIu_enudzl.jpg",

        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482823/Jammal/MEN/ZZGx53DJl2hKNUlWwSJgtWomVAWJc86Mc3Wi5MIu_enudzl.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515763/Jammal/MEN/Product/IMG_5616_rscshw.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515765/Jammal/MEN/Product/IMG_5615_m2llte.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515761/Jammal/MEN/Product/IMG_5614_hcaovw.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515761/Jammal/MEN/Product/IMG_5613_h8gsej.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515762/Jammal/MEN/Product/IMG_5612_dywjcs.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482823/Jammal/MEN/ZZGx53DJl2hKNUlWwSJgtWomVAWJc86Mc3Wi5MIu_enudzl.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515763/Jammal/MEN/Product/IMG_5616_rscshw.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515765/Jammal/MEN/Product/IMG_5615_m2llte.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515761/Jammal/MEN/Product/IMG_5614_hcaovw.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515761/Jammal/MEN/Product/IMG_5613_h8gsej.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515762/Jammal/MEN/Product/IMG_5612_dywjcs.jpg",
        ],
      },
      {
        id: 2,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482866/Jammal/MEN/JPkXChVDZE7na2TWXgfAVDQzijzj6w68dGvyrFVz_t5mkki.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482866/Jammal/MEN/JPkXChVDZE7na2TWXgfAVDQzijzj6w68dGvyrFVz_t5mkki.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515762/Jammal/MEN/Product/IMG_5618_blseiu.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515765/Jammal/MEN/Product/IMG_5617_ukxdep.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515765/Jammal/MEN/Product/IMG_5617_ukxdep.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482866/Jammal/MEN/JPkXChVDZE7na2TWXgfAVDQzijzj6w68dGvyrFVz_t5mkki.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515762/Jammal/MEN/Product/IMG_5618_blseiu.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515765/Jammal/MEN/Product/IMG_5617_ukxdep.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515765/Jammal/MEN/Product/IMG_5617_ukxdep.jpg",
        ],
      },
      {
        id: 3,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482823/Jammal/MEN/ZZGx53DJl2hKNUlWwSJgtWomVAWJc86Mc3Wi5MIu_enudzl.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482823/Jammal/MEN/ZZGx53DJl2hKNUlWwSJgtWomVAWJc86Mc3Wi5MIu_enudzl.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515763/Jammal/MEN/Product/IMG_5619_viu0ex.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515770/Jammal/MEN/Product/IMG_5620_p5tpmn.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515776/Jammal/MEN/Product/IMG_5621_k0c0mo.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515785/Jammal/MEN/Product/IMG_5623_mk5tgl.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515789/Jammal/MEN/Product/IMG_5622_mznb2x.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482823/Jammal/MEN/ZZGx53DJl2hKNUlWwSJgtWomVAWJc86Mc3Wi5MIu_enudzl.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515763/Jammal/MEN/Product/IMG_5619_viu0ex.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515770/Jammal/MEN/Product/IMG_5620_p5tpmn.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515776/Jammal/MEN/Product/IMG_5621_k0c0mo.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515785/Jammal/MEN/Product/IMG_5623_mk5tgl.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515789/Jammal/MEN/Product/IMG_5622_mznb2x.jpg",
        ],
      },
      {
        id: 4,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482866/Jammal/MEN/JPkXChVDZE7na2TWXgfAVDQzijzj6w68dGvyrFVz_t5mkki.jpg",
        editedImages: ["1", "2"],
      },
      {
        id: 5,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482878/Jammal/MEN/EwO9XFJOL03PxifZHNRAnESDSP7CsltpwmVw24gg_qddwjn.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 6,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482893/Jammal/MEN/rVJ5Z4UOKavPQYmt7fSEx56kHQ54Qo0fUr8L3wZB_sulejm.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 7,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482924/Jammal/MEN/nFdoi6sPQCwaCdHkAfXGZ8zQhDPFpFpRp6j4IxQ9_ntngst.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 8,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482936/Jammal/MEN/oO334uMkLXhqGgqEuVsmYLOqcNXaPIfd78GhnOj4_kryisy.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 9,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482952/Jammal/MEN/yQje15SzkOGslbQ6dIiLmUwaov95U9zKjEmYH6AA_junrvn.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 10,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483074/Jammal/MEN/sZWMi3xU3cqTmc8Z4EhqCNPJ63aF9QH9gSTj9njp_tzit4n.png",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 11,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483081/Jammal/MEN/B4udDZzU8VAWxikPE2wDh8O8PpefRjNmlzuTb9Pv_arbg3p.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 12,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482924/Jammal/MEN/nFdoi6sPQCwaCdHkAfXGZ8zQhDPFpFpRp6j4IxQ9_ntngst.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 13,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483097/Jammal/MEN/e6NJHfdeGypdtqXPYvoTTkFIb2nDDt7kL0zZDl1F_gy9zjx.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 14,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483111/Jammal/MEN/N4oNFKvxZYPlZhWA1JMKoohZRKWURezt0ztcZoPM_xthkng.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 15,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483124/Jammal/MEN/sRm4wGJsiu29O26UFhUMiFFwRICCcrLfZ5wcnuL6_fvkxpv.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 16,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483151/Jammal/MEN/40If2mw36SGk7ySxxwxtenhmOLCNIqcc7OabfLqr_vslzzd.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 17,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483169/Jammal/MEN/eKJ7oQBObsyhdloRw4zdD1yNf5uaJjrBB0IVycRM_mfgu3f.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 18,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483180/Jammal/MEN/Ly9jq6DwNfFlyO96TA49toDDh4YZDKAnbAPyNqlD_wqrpac.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 19,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483213/Jammal/MEN/WvIIMACL1Jgr6MbjoZLVGjaxJuAT3tVKah7Tt6Kf_z3hzf6.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 20,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483228/Jammal/MEN/lV6D0IKpaP7wRJJ4NNowKHxZdsYAkU7bZ4PYkZUr_teepgs.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
    ],
  },

  {
    id: 100002,
    name: "قسم ملابس النساء",
    products: [
      {
        id: 101,
        name: "تيشرت أوفر سايز مخطط",
        description:
          "تيشرت أوفر سايز مخطط الخامه قطن إصبن الطول ٧٥سم المقاس وان سيز ل ٨٠ك",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483297/Jammal/Women/YQlA9bcdlpxi13ZLeOjbYq6HWXHuM6zbZw7qRTRe_eto815.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483297/Jammal/Women/YQlA9bcdlpxi13ZLeOjbYq6HWXHuM6zbZw7qRTRe_eto815.jpg",
          "2",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483297/Jammal/Women/YQlA9bcdlpxi13ZLeOjbYq6HWXHuM6zbZw7qRTRe_eto815.jpg",
          "",
        ],
      },
      {
        id: 102,
        name: "جيبه zebra",
        description: "جيبه zebra  الخامه اسكوبا كريب المقاس وان سيز ل ٨٠ك",

        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483304/Jammal/Women/xvGsR3GLoRrXhNeabjME6q8Za1XWTQHu6MXkssXO_zp3vvc.jpg",
        editedImages: ["1", "2"],
        normalImages: ["1", "2"],
      },
      {
        id: 103,
        name: "",
        description:
          "تيشرت أوفر سايز مخطط الخامه قطن إصبن الطول ٧٥سم المقاس وان سيز ل ٨٠ك",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483311/Jammal/Women/T4uku2tcdcSPlpGCqPsq43umjVakAo6GUscUFy9i_zzgxbh.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483311/Jammal/Women/T4uku2tcdcSPlpGCqPsq43umjVakAo6GUscUFy9i_zzgxbh.jpg",
          "2",
        ],
        normalImages: ["1", "2"],
      },
      {
        id: 104,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483318/Jammal/Women/7xXdfB2BynLY9PCSghen5jqazxD284qA8XY5GEfc_po9msp.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483318/Jammal/Women/7xXdfB2BynLY9PCSghen5jqazxD284qA8XY5GEfc_po9msp.jpg",
          "2",
        ],
      },
      {
        id: 105,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483325/Jammal/Women/Naz1K1igX8lCykX60kogav3ar3Iv59NnsCgZ8sdc_pkj1e1.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483325/Jammal/Women/Naz1K1igX8lCykX60kogav3ar3Iv59NnsCgZ8sdc_pkj1e1.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483469/Jammal/Women/Product/47698_zfzpdh.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483477/Jammal/Women/Product/95290_wwdlby.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483486/Jammal/Women/Product/84933_y65uh9.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483494/Jammal/Women/Product/40974_x4d4y9.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483502/Jammal/Women/Product/71017_dc6xul.jpg",
        ],
        normalImages: ["", ""],
      },
      {
        id: 106,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483339/Jammal/Women/1lxgF4alyANAZ7V3tAgquAmrVLuehSQO43TEOSZS_xaxxy5.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483339/Jammal/Women/1lxgF4alyANAZ7V3tAgquAmrVLuehSQO43TEOSZS_xaxxy5.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483381/Jammal/Women/Product/35809_ax5ikx.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483399/Jammal/Women/Product/83248_s9ogfa.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483389/Jammal/Women/Product/85197_r4wjjb.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483411/Jammal/Women/Product/7997_qen13k.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483422/Jammal/Women/Product/23496_au7lsv.jpg",
        ],
        normalImages: ["", ""],
      },
    ],
  },

  {
    id: 100003,
    name: "قسم ملابس الاطفال",
    products: [
      {
        id: 201,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494211/Jammal/Children/IMG_5541_rwxaaz.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494211/Jammal/Children/Product/IMG_5542_nb5rir.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494211/Jammal/Children/IMG_5541_rwxaaz.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494211/Jammal/Children/Product/IMG_5543_msygtz.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494211/Jammal/Children/Product/IMG_5543_msygtz.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494211/Jammal/Children/Product/IMG_5543_msygtz.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494211/Jammal/Children/Product/IMG_5543_msygtz.jpg",
        ],
      },
    ],
  },
  {
    id: 100004,
    name: "قسم الأحذية",
    products: [
      {
        id: 301,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486638/Jammal/Shoes/Q0r4PxKDQXpLppKYKZpDcrHzeod4wnuJzjrMQlFv_hltlzm.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486638/Jammal/Shoes/Q0r4PxKDQXpLppKYKZpDcrHzeod4wnuJzjrMQlFv_hltlzm.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486702/Jammal/Shoes/Product/18249_d4ge63.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486755/Jammal/Shoes/Product/42261_m6n2cj.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486776/Jammal/Shoes/Product/13464_tmmdfl.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486841/Jammal/Shoes/Product/12272_m9xk0k.png",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486858/Jammal/Shoes/Product/85800_siansn.jpg",
        ],
        normalImages: ["", ""],
      },
      {
        id: 302,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486645/Jammal/Shoes/TkGNxFxONaVWtR7HnIp8PbzBoG0l0ThZ9HltGgsq_j2putu.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486645/Jammal/Shoes/TkGNxFxONaVWtR7HnIp8PbzBoG0l0ThZ9HltGgsq_j2putu.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486879/Jammal/Shoes/Product/15775_htpzc3.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486890/Jammal/Shoes/Product/48550_hk3wxl.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486898/Jammal/Shoes/Product/32513_jq4zar.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486906/Jammal/Shoes/Product/77278_so2whx.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486645/Jammal/Shoes/TkGNxFxONaVWtR7HnIp8PbzBoG0l0ThZ9HltGgsq_j2putu.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486645/Jammal/Shoes/TkGNxFxONaVWtR7HnIp8PbzBoG0l0ThZ9HltGgsq_j2putu.jpg",
        ],
      },
      {
        id: 303,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486653/Jammal/Shoes/S5GrGQjpIhGnixPRfCGtyKRdvOoipkYz5Tc8ZdXd_ucewhl.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486653/Jammal/Shoes/S5GrGQjpIhGnixPRfCGtyKRdvOoipkYz5Tc8ZdXd_ucewhl.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486925/Jammal/Shoes/Product/51911_z3qex5.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486933/Jammal/Shoes/Product/65217_ggqsjh.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486943/Jammal/Shoes/Product/525_u8w6bw.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486948/Jammal/Shoes/Product/14035_djblmb.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486955/Jammal/Shoes/Product/67325_pik9xh.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486963/Jammal/Shoes/Product/39037_cbxvwu.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486653/Jammal/Shoes/S5GrGQjpIhGnixPRfCGtyKRdvOoipkYz5Tc8ZdXd_ucewhl.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486653/Jammal/Shoes/S5GrGQjpIhGnixPRfCGtyKRdvOoipkYz5Tc8ZdXd_ucewhl.jpg",
        ],
      },
      {
        id: 304,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486660/Jammal/Shoes/aXp5KRXBMKJ6UIUlS0tadQJB0ubGYYhUSex80KpF_uxq5gh.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486660/Jammal/Shoes/aXp5KRXBMKJ6UIUlS0tadQJB0ubGYYhUSex80KpF_uxq5gh.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486979/Jammal/Shoes/Product/45320_s3ybmx.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486990/Jammal/Shoes/Product/6504_kkdji0.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487001/Jammal/Shoes/Product/4531_e3o1tp.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487016/Jammal/Shoes/Product/63594_buxlgi.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487024/Jammal/Shoes/Product/84013_xfgezk.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486660/Jammal/Shoes/aXp5KRXBMKJ6UIUlS0tadQJB0ubGYYhUSex80KpF_uxq5gh.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688486660/Jammal/Shoes/aXp5KRXBMKJ6UIUlS0tadQJB0ubGYYhUSex80KpF_uxq5gh.jpg",
        ],
      },
    ],
  },
  {
    id: 100005,
    name: "قسم الساعات",
    products: [
      {
        id: 401,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483228/Jammal/MEN/lV6D0IKpaP7wRJJ4NNowKHxZdsYAkU7bZ4PYkZUr_teepgs.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
    ],
  },
  {
    id: 100006,
    name: "قسم الشنط والمحافظ",
    products: [
      {
        id: 501,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487163/Jammal/Bags/7t5bJLWUPMljhv84ColFToftsbbRJtNkUFJQ4dA8_novjwb.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487163/Jammal/Bags/7t5bJLWUPMljhv84ColFToftsbbRJtNkUFJQ4dA8_novjwb.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494096/Jammal/Bags/Product/IMG_5525_ifibbk.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494096/Jammal/Bags/Product/IMG_5523_hutqgd.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494097/Jammal/Bags/Product/IMG_5524_uulf8s.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487163/Jammal/Bags/7t5bJLWUPMljhv84ColFToftsbbRJtNkUFJQ4dA8_novjwb.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487163/Jammal/Bags/7t5bJLWUPMljhv84ColFToftsbbRJtNkUFJQ4dA8_novjwb.jpg",
        ],
      },
      {
        id: 502,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487169/Jammal/Bags/00APGIAzgpAZQJ3Nly9lFB1ktuQdZgTM5xEK82OP_ljjyis.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487169/Jammal/Bags/00APGIAzgpAZQJ3Nly9lFB1ktuQdZgTM5xEK82OP_ljjyis.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494097/Jammal/Bags/Product/IMG_5528_oqy8oq.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494096/Jammal/Bags/Product/IMG_5527_nogznp.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494096/Jammal/Bags/Product/IMG_5530_e7ir5x.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494096/Jammal/Bags/Product/IMG_5529_ynjwg1.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494095/Jammal/Bags/Product/IMG_5526_k9hja3.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487169/Jammal/Bags/00APGIAzgpAZQJ3Nly9lFB1ktuQdZgTM5xEK82OP_ljjyis.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487169/Jammal/Bags/00APGIAzgpAZQJ3Nly9lFB1ktuQdZgTM5xEK82OP_ljjyis.jpg",
        ],
      },
      {
        id: 503,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487177/Jammal/Bags/OFwqPqhbHSKK8dKtdLtnV5ruFSHCQGjPTCjzDYx8_qwuj46.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487177/Jammal/Bags/OFwqPqhbHSKK8dKtdLtnV5ruFSHCQGjPTCjzDYx8_qwuj46.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494096/Jammal/Bags/Product/IMG_5532_w8yaxq.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494096/Jammal/Bags/Product/IMG_5534_djzqeb.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494097/Jammal/Bags/Product/IMG_5531_gvnizy.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494098/Jammal/Bags/Product/IMG_5533_hnnio0.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494097/Jammal/Bags/Product/IMG_5535_hhelt6.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487177/Jammal/Bags/OFwqPqhbHSKK8dKtdLtnV5ruFSHCQGjPTCjzDYx8_qwuj46.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487177/Jammal/Bags/OFwqPqhbHSKK8dKtdLtnV5ruFSHCQGjPTCjzDYx8_qwuj46.jpg",
        ],
      },
      {
        id: 504,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487186/Jammal/Bags/XsAWsMqxE9lP6paWK1nsTSjRyBW3dLy34NMMAmDG_c3uok7.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487186/Jammal/Bags/XsAWsMqxE9lP6paWK1nsTSjRyBW3dLy34NMMAmDG_c3uok7.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494098/Jammal/Bags/Product/IMG_5537_xpvnas.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494098/Jammal/Bags/Product/IMG_5539_axoh5i.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494098/Jammal/Bags/Product/IMG_5538_xu7xbd.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494097/Jammal/Bags/Product/IMG_5540_hs538r.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494095/Jammal/Bags/Product/IMG_5536_tuevhr.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487186/Jammal/Bags/XsAWsMqxE9lP6paWK1nsTSjRyBW3dLy34NMMAmDG_c3uok7.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688487186/Jammal/Bags/XsAWsMqxE9lP6paWK1nsTSjRyBW3dLy34NMMAmDG_c3uok7.jpg",
        ],
      },
    ],
  },
  {
    id: 100007,
    name: "قسم منتجات الاضاءة",
    products: [
      {
        id: 601,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483228/Jammal/MEN/lV6D0IKpaP7wRJJ4NNowKHxZdsYAkU7bZ4PYkZUr_teepgs.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 602,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483213/Jammal/MEN/WvIIMACL1Jgr6MbjoZLVGjaxJuAT3tVKah7Tt6Kf_z3hzf6.jpg",
        editedImages: ["1", "2"],
        normalImages: ["1", "2"],
      },
      {
        id: 603,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483180/Jammal/MEN/Ly9jq6DwNfFlyO96TA49toDDh4YZDKAnbAPyNqlD_wqrpac.jpg",
        editedImages: ["1", "2"],
        normalImages: ["1", "2"],
      },
      {
        id: 604,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483169/Jammal/MEN/eKJ7oQBObsyhdloRw4zdD1yNf5uaJjrBB0IVycRM_mfgu3f.jpg",
        editedImages: ["1", "2"],
      },
      {
        id: 605,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483151/Jammal/MEN/40If2mw36SGk7ySxxwxtenhmOLCNIqcc7OabfLqr_vslzzd.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
    ],
  },
  {
    id: 100008,
    name: "قسم الالكترونيات",
    products: [
      {
        id: 701,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483228/Jammal/MEN/lV6D0IKpaP7wRJJ4NNowKHxZdsYAkU7bZ4PYkZUr_teepgs.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 702,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483213/Jammal/MEN/WvIIMACL1Jgr6MbjoZLVGjaxJuAT3tVKah7Tt6Kf_z3hzf6.jpg",
        editedImages: ["1", "2"],
        normalImages: ["1", "2"],
      },
      {
        id: 703,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483180/Jammal/MEN/Ly9jq6DwNfFlyO96TA49toDDh4YZDKAnbAPyNqlD_wqrpac.jpg",
        editedImages: ["1", "2"],
        normalImages: ["1", "2"],
      },
      {
        id: 704,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483169/Jammal/MEN/eKJ7oQBObsyhdloRw4zdD1yNf5uaJjrBB0IVycRM_mfgu3f.jpg",
        editedImages: ["1", "2"],
      },
      {
        id: 705,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483151/Jammal/MEN/40If2mw36SGk7ySxxwxtenhmOLCNIqcc7OabfLqr_vslzzd.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
    ],
  },
  {
    id: 100009,
    name: "قسم منتجات العناية الشخصية (الرجالية)",
    products: [
      {
        id: 801,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483228/Jammal/MEN/lV6D0IKpaP7wRJJ4NNowKHxZdsYAkU7bZ4PYkZUr_teepgs.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 802,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483213/Jammal/MEN/WvIIMACL1Jgr6MbjoZLVGjaxJuAT3tVKah7Tt6Kf_z3hzf6.jpg",
        editedImages: ["1", "2"],
        normalImages: ["1", "2"],
      },
      {
        id: 803,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483180/Jammal/MEN/Ly9jq6DwNfFlyO96TA49toDDh4YZDKAnbAPyNqlD_wqrpac.jpg",
        editedImages: ["1", "2"],
        normalImages: ["1", "2"],
      },
      {
        id: 804,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483169/Jammal/MEN/eKJ7oQBObsyhdloRw4zdD1yNf5uaJjrBB0IVycRM_mfgu3f.jpg",
        editedImages: ["1", "2"],
      },
      {
        id: 805,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483151/Jammal/MEN/40If2mw36SGk7ySxxwxtenhmOLCNIqcc7OabfLqr_vslzzd.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
    ],
  },
  {
    id: 100010,
    name: "قسم منتجات العناية الشخصية (النسائية)",
    products: [
      {
        id: 901,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483228/Jammal/MEN/lV6D0IKpaP7wRJJ4NNowKHxZdsYAkU7bZ4PYkZUr_teepgs.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 902,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483213/Jammal/MEN/WvIIMACL1Jgr6MbjoZLVGjaxJuAT3tVKah7Tt6Kf_z3hzf6.jpg",
        editedImages: ["1", "2"],
        normalImages: ["1", "2"],
      },
      {
        id: 903,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483180/Jammal/MEN/Ly9jq6DwNfFlyO96TA49toDDh4YZDKAnbAPyNqlD_wqrpac.jpg",
        editedImages: ["1", "2"],
        normalImages: ["1", "2"],
      },
      {
        id: 904,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483169/Jammal/MEN/eKJ7oQBObsyhdloRw4zdD1yNf5uaJjrBB0IVycRM_mfgu3f.jpg",
        editedImages: ["1", "2"],
      },
      {
        id: 905,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483151/Jammal/MEN/40If2mw36SGk7ySxxwxtenhmOLCNIqcc7OabfLqr_vslzzd.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
    ],
  },
  {
    id: 100011,
    name: "قسم المنتجات الطبية والرياضية",
    products: [
      {
        id: 1001,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495015/Jammal/Health/IMG_5568_wmdigo.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495015/Jammal/Health/IMG_5568_wmdigo.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495113/Jammal/Health/IMG_5566_sengms.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495169/Jammal/Health/IMG_5569_w3royq.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495192/Jammal/Health/IMG_5563_tkwugv.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495193/Jammal/Health/IMG_5567_jojwzf.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495205/Jammal/Health/IMG_5565_pj58qo.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495156/Jammal/Health/IMG_5564_q294na.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495156/Jammal/Health/IMG_5564_q294na.jpg",
        ],
      },
      {
        id: 1002,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495208/Jammal/Health/IMG_5551_r5njjt.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495208/Jammal/Health/IMG_5551_r5njjt.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495156/Jammal/Health/IMG_5555_t17k2q.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495151/Jammal/Health/IMG_5554_yxfv1d.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495070/Jammal/Health/IMG_5550_oabakz.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495207/Jammal/Health/IMG_5553_tl0hgc.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495207/Jammal/Health/IMG_5553_tl0hgc.jpg",
        ],
      },
      {
        id: 1003,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495192/Jammal/Health/IMG_5556_ud9nbd.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495192/Jammal/Health/IMG_5556_ud9nbd.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495188/Jammal/Health/IMG_5560_wiviav.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495174/Jammal/Health/IMG_5559_jfddw7.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495158/Jammal/Health/IMG_5558_j1vreg.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495156/Jammal/Health/IMG_5561_fydg0l.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495156/Jammal/Health/IMG_5561_fydg0l.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688495156/Jammal/Health/IMG_5561_fydg0l.jpg",
        ],
      },
    ],
  },
  {
    id: 100012,
    name: "قسم الالعاب",
    products: [
      {
        id: 1101,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494624/Jammal/Toys/IMG_5544_rvhikk.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494678/Jammal/Toys/Product/IMG_5544_esnnfg.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494678/Jammal/Toys/Product/IMG_5549_ghwqwm.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494673/Jammal/Toys/Product/IMG_5547_bhvje0.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494673/Jammal/Toys/Product/IMG_5548_zrmmnz.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494678/Jammal/Toys/Product/IMG_5546_rkgqzi.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494680/Jammal/Toys/Product/IMG_5545_gg4obb.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688494680/Jammal/Toys/Product/IMG_5545_gg4obb.jpg",
        ],
      },
      {
        id: 1102,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688645915/Jammal/Toys/IzzU9uXNo5kQyEyyp3Hm1jblDbrFc8bVPkS65oDk_ed8ovm.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688645915/Jammal/Toys/IzzU9uXNo5kQyEyyp3Hm1jblDbrFc8bVPkS65oDk_ed8ovm.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688645915/Jammal/Toys/IzzU9uXNo5kQyEyyp3Hm1jblDbrFc8bVPkS65oDk_ed8ovm.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688645915/Jammal/Toys/IzzU9uXNo5kQyEyyp3Hm1jblDbrFc8bVPkS65oDk_ed8ovm.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688645915/Jammal/Toys/IzzU9uXNo5kQyEyyp3Hm1jblDbrFc8bVPkS65oDk_ed8ovm.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688645915/Jammal/Toys/IzzU9uXNo5kQyEyyp3Hm1jblDbrFc8bVPkS65oDk_ed8ovm.jpg",
        ],
      },
      {
        id: 1103,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688645920/Jammal/Toys/tj3awsl36sKHPPXQPwyAYf7i6dr2FqiqpY0FmNZ8_s2jryw.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688645920/Jammal/Toys/tj3awsl36sKHPPXQPwyAYf7i6dr2FqiqpY0FmNZ8_s2jryw.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647200/Jammal/Toys/Product/56526_nbilb6.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647210/Jammal/Toys/Product/1918_acdzkg.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647220/Jammal/Toys/Product/79262_rkulm7.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647226/Jammal/Toys/Product/97474_uoaftb.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647242/Jammal/Toys/Product/1881_lijwlp.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647242/Jammal/Toys/Product/1881_lijwlp.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647242/Jammal/Toys/Product/1881_lijwlp.jpg",
        ],
      },
      {
        id: 1104,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688645928/Jammal/Toys/ddzgYEtQ6pIA2S4ypXv3wNqLp9neuQW8RaGlzSAe_tpvo6f.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688645928/Jammal/Toys/ddzgYEtQ6pIA2S4ypXv3wNqLp9neuQW8RaGlzSAe_tpvo6f.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647267/Jammal/Toys/Product/21832_qaxdix.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647276/Jammal/Toys/Product/18038_bikcrs.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647283/Jammal/Toys/Product/75995_hw4tha.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647291/Jammal/Toys/Product/57864_zhi3rf.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647302/Jammal/Toys/Product/30972_xu88yj.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647302/Jammal/Toys/Product/30972_xu88yj.jpg",
        ],
      },
      {
        id: 1105,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688645940/Jammal/Toys/HPb7tP5f6VM53JaSpQqu8GLjUqGv8l8MZs7MNflf_e6jxja.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688645940/Jammal/Toys/HPb7tP5f6VM53JaSpQqu8GLjUqGv8l8MZs7MNflf_e6jxja.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647331/Jammal/Toys/Product/43753_pfk2at.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647319/Jammal/Toys/Product/18824_m77yeu.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647346/Jammal/Toys/Product/26392_ypsdst.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647336/Jammal/Toys/Product/83324_yoiuqz.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647354/Jammal/Toys/Product/44044_zxhsb1.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647354/Jammal/Toys/Product/44044_zxhsb1.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647354/Jammal/Toys/Product/44044_zxhsb1.jpg",
        ],
      },
      {
        id: 1106,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688645954/Jammal/Toys/87XvCnsXClw019AIzV2DxhRN2jxKXdq5uapgdr3O_xyxauc.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688645954/Jammal/Toys/87XvCnsXClw019AIzV2DxhRN2jxKXdq5uapgdr3O_xyxauc.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647378/Jammal/Toys/Product/21602_ksdd4q.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647388/Jammal/Toys/Product/21970_cnjhvf.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647396/Jammal/Toys/Product/7861_rsxhov.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647403/Jammal/Toys/Product/53630_n0jmaf.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647408/Jammal/Toys/Product/83752_y1roaq.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647408/Jammal/Toys/Product/83752_y1roaq.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688647408/Jammal/Toys/Product/83752_y1roaq.jpg",
        ],
      },
    ],
  },
  {
    id: 100013,
    name: "قسم منتجات التبريد والتهوية ",
    products: [
      {
        id: 1201,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483228/Jammal/MEN/lV6D0IKpaP7wRJJ4NNowKHxZdsYAkU7bZ4PYkZUr_teepgs.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
    ],
  },
  {
    id: 100014,
    name: "قسم الادوات المنزلية",
    products: [
      {
        id: 1301,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483228/Jammal/MEN/lV6D0IKpaP7wRJJ4NNowKHxZdsYAkU7bZ4PYkZUr_teepgs.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
    ],
  },
  {
    id: 1000015,
    name: "قسم مستلزمات السيارات",
    products: [
      {
        id: 1401,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483228/Jammal/MEN/lV6D0IKpaP7wRJJ4NNowKHxZdsYAkU7bZ4PYkZUr_teepgs.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
    ],
  },
  {
    id: 100016,
    name: "قسم مستلزمات شهر رمضان",
    products: [
      {
        id: 1501,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483228/Jammal/MEN/lV6D0IKpaP7wRJJ4NNowKHxZdsYAkU7bZ4PYkZUr_teepgs.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
    ],
  },
  {
    id: 100017,
    name: "قسم العروض",
    products: [
      {
        id: 1601,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483228/Jammal/MEN/lV6D0IKpaP7wRJJ4NNowKHxZdsYAkU7bZ4PYkZUr_teepgs.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
    ],
  },
  {
    id: 100018,
    name: "قسم منتجات متنوعة",
    products: [
      {
        id: 1701,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483228/Jammal/MEN/lV6D0IKpaP7wRJJ4NNowKHxZdsYAkU7bZ4PYkZUr_teepgs.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
    ],
  },
];

router.get("/test", (req, res) => {
  res.send(myTest);
});

module.exports = router;
