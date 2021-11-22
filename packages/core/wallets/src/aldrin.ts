import { SolletWalletAdapter, SolletWalletAdapterConfig } from '@solana/wallet-adapter-sollet';
import { Wallet, WalletName } from './types';

export const getAldrinWallet = ({ provider, ...config }: SolletWalletAdapterConfig = {}): Wallet => ({
    name: WalletName.Aldrin,
    url: 'https://wallet.aldrin.com',
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxwYXRoIGQ9Ik0wIDE2QzAgNy4xNjM0NCA3LjE2MzQ0IDAgMTYgMEMyNC44MzY2IDAgMzIgNy4xNjM0NCAzMiAxNkMzMiAyNC44MzY2IDI0LjgzNjYgMzIgMTYgMzJDNy4xNjM0NCAzMiAwIDI0LjgzNjYgMCAxNloiIGZpbGw9InVybCgjcGF0dGVybjApIi8+CjxwYXRoIGQ9Ik0wLjUgMTZDMC41IDcuNDM5NTkgNy40Mzk1OSAwLjUgMTYgMC41QzI0LjU2MDQgMC41IDMxLjUgNy40Mzk1OSAzMS41IDE2QzMxLjUgMjQuNTYwNCAyNC41NjA0IDMxLjUgMTYgMzEuNUM3LjQzOTU5IDMxLjUgMC41IDI0LjU2MDQgMC41IDE2WiIgc3Ryb2tlPSIjODA4MDgwIiBzdHJva2Utb3BhY2l0eT0iMC41Ii8+CjxkZWZzPgo8cGF0dGVybiBpZD0icGF0dGVybjAiIHBhdHRlcm5Db250ZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj4KPHVzZSB4bGluazpocmVmPSIjaW1hZ2UwIiB0cmFuc2Zvcm09InNjYWxlKDAuMDAxOTUzMTIpIi8+CjwvcGF0dGVybj4KPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQWdBQUFBSUFDQVlBQUFEMGVOVDZBQUFnQUVsRVFWUjRBZTJkZ1hIYk9neUdPMEpHNkFnWm9TTmtnMmFEWm9OMmcyYURaSU5rZzR5UWJOQVJPZ0xlL1g1bW96aXlMTmtTQ1FLZjduSjJiRm1pUG9JQUNJTGtseThjRUlDQWV3Sm05dFhNcnMzc201bmQ3djkrbVpuK0h2Wi9UMmIyc3YvN1kyYkR2NysyN0JqKzluVndYVjIvM0svY1grVzUyWmROWmZ6cUhpZ0ZoQUFFSUFBQkNMUWtZR1pYZThNdUEzcG5admQ3QXl0REt5TzgxSEF2TS9QYm5xMnlGK2RCem9rY0JqMWpjUmF1V3JMbjNoQ0FBQVFnQUlGTkNleDc3ME1ETDJQWXUzRmZ5M1VvVG9LWXlQbVJnNkFveC9XbWxjTEZJUUFCQ0VBQUFtc1JPREQwQ3BPcjk5dHpEMzR0STMvSmRjU3dSQS9rUk9FWXJDV3dYQWNDRUlBQUJKWVJHSVR0MVZ2RjBGOWkzcy83clp3cURaSDhpeGdzcTBIT2hnQUVJQUFCQ013Z3NCK2pIeHI3ODh3V3Y5cWFnS0lGY3NpVWxFaWtZSVpzY3dvRUlBQUJDT3dKN0h2M0dvTlc3MUs5VEVMNFc1dnQ3YTVmSWdWS1BsU2RrblJJUzRjQUJDQUFnZjhKN0EyK3hwWmw4TldENUloTlFIV3N1bGFkNHhDZ0NDQUFBUWhrSVhEUXc4Zmd4emIyYzU2dU9BVGZzclFCbmhNQ0VJQkFHZ0tETVh4QytuTk1ZdTV6SkNQSzl5Q0hJSTJHNEVFaEFJRXdCQTU2K1pwdnp3R0Jjd2hJZHBSVVNIUWdqSGJnUVNBQWdYQUU5a1pmMmQvMDhzOHhkZnptRkFFbEZHbzlBc2tZU3gySDB5QThFQVFnMEJXQnZkRlh1RlpHbndNQ05RbEk1bkFHdXRJWUZCWUNFT2lhQUVhL3BvM2pYak1KNEF4MHJWVW9QQVFnNEpZQVJuK21HZUkwRHdTS004QVVRN2NhaFlKQkFBTHVDZXdYYjlHNEs0dnhlREJ0bEdFcEFTVVEzcmh2YUJRUUFoQ0FnQWNDK3lsN1B6SDZTMjBONXpzbVVHWVRrRHpvUWNsUUJnaEF3QThCUXZ5T1RSZEZXNXNBUXdSK1ZBOGxnUUFFV2hIWWgvaTFMQ3NoL3JYTkROZnpUa0F5cnlFQ29nS3RGQkQzaFFBRTZoTFk5L2JMZkgzdlNwcnlRYUFHZ1YxVW9HNUw1RzRRZ0FBRUtoSFlHMzdHOW11WUUrN1JLd0Z5QlNycEkyNERBUWhVSURESTVPOVZLVk51Q0xRZ29PRUI5aU9vb0tPNEJRUWdzREtCdmVGWGFKTURBaEE0bndEREF5dnJKaTRIQVFoc1FHQ1F6YzhHUE9jcmZINEpnVEVDYWxPM0d6UmJMZ2tCQ0VEZ2ZBS003NC9wYXo2RHdDWUVkbzRBc3dmTzExZjhFZ0lRV0lFQWhuOFRCYzlGSVRDSGdCd0JKZFV5alhBRlhjWWxJQUNCbVFRdy9IUDBNK2RBb0FvQkhJR1plb3ZUSUFDQkN3aGcrS3NvZEc0Q2dYTUk0QWhjb052NEtRUWdjSVFBaHY4Y2ZjeHZJTkNFQUk3QUVUM0d4eENBd0FJQ0dQNG1DcHliUW1BTkFuSUVtRFd3UU45eEtnUWdzQ2NnNWNFYS9Xdm9ZYTRCZ2FZRWNBVFE2aENBd0R3Qyt3VjgzcHFxTEc0T0FRaXNUUUJIWUo0SzVDd0k1Q1BBeW4xcjYxdXVCd0dYQkxTeUlGTUg4Nmw0bmhnQ253bnN4L2wvdTFSVkZBb0NFTmlLQUZzUmYxYUhmQUtCUEFUMkM0bG9YM0lPQ0VBZ0g0SGRqSUU4R284bmhRQUV2dXpEL1dyOEhCQ0FBQVRJRDhBdVFDQTZBWTM5bVJrNzlLSHdJUUNCTVFJTUMwUTNBanhmVGdLRSs4ZjBIWjlCQUFJakJIN20xSkk4TlFTQ0VTRGNQNkxlK0FnQ0VEaEZRTU1DMThIVUlZOERnUndFeU80L3BkLzRIZ0lRbUVHQVlZRWNKb09uakVMQXpHNVl4VytHYXVNVUNFQmdEZ0dTQktNWUI1NGpMZ0dTL09ib01zNkJBQVRPSkVBMElLNzU0TWw2Sm1CbVArajFuNm5XK0JrRUlEQ1hBTkdBbmcwRlpZOUZnRjcvWEwzRmVSQ0F3SW9FaUFiRU1pVThUVzhFR090ZlVaMXhLUWhBWUNrQm9nRzlHUTNLMnorQmZZYi8wOUxXeXZrUWdBQUVOaUJBTktCL3M4SVQ5RUNBZWYwYnFDOHVDUUVJWEVwQTBZQnZQZWhReWdpQkxnbVlHYnYyWGFxbStEMEVJTEFsQVZZUjdOSzZVR2kzQlBhSmZtOWJ0bHF1RFFFSVFHQWxBb29HZkhXclVDa1lCSG9od1BTK2xWUVNsNEVBQkdvUzBEYmpkNzNvV2NvSkFWY0VXTXEzcHE3aVhoQ0F3RVlFbENCNDVVcTVVaGdJZUNhd0Qva3JqTVlCZ1ZFQ2YvNzhzWmVYRjN0NmVyS0hoNGZkMzY5ZnYweC90N2UzdTc5djM3N1o5ZlcxZmYzNjlldy9YVU4vNVpybEh1V2VLb1ArVkI0T0NCd2h3SkNBWjRORDJmd1FJT1IvUklVaysxZ0d0UmozWXRTTE1mL3k1WXQ1L1pPelVSd0dsVnVPQWc1Q011RWRmMXlHQlB5WUdVcmlqUUFoLzNHdEVmblR2My8vMnV2cjY4NUkzdDNkN1F5bkRLaFg0NzVHdVlxRG9PZVZnNlBuNTBoRjRMYzMzVXQ1SU5DVUFGbis4UldnakwxNnd2ZjM5N3R3ZW5SRHY5UlpVSFJEd3d6aUkwN2l4UkdXQUVNQ1RTME9OM2REWUwrd0Q5b3VtSzRyeHY3bTVtWTMvcjdVSUhMK2wxMytndmpKS1NCU0VLeUJtTWtKWU9FZ041YUlnbFFuc0IvdkQ5ZXlNejVRTWZnYS83NjZ1Z29keG0vbG5JZ3JEa0c0MXNYQ1FkVXREemRzU21BLzNxL3BNUnlkRWxDUFZEMVRESDY3aEVRY2drNGJ6K2Rpa3hmUTFDSng4Mm9FR08vLzNQcDcrRVJqMHNwbzF6ZzFQZngyUm44cStxQzhDdFdQa2dzNXVpTkFYa0ExSzhTTm1oQXdzMnY3Zit5cnU5YVpzY0F5K3ZUeWZScjdLVWRBMzVYb3dPUGpJd21GL1RSZW5JQW1sb21iYms3QXpMNmJHY2wrenBYUjBPaWZNako4MzQ5em9LRWFPUU1zV09TOEFmNnZJMjgyVjhqY0FBSzFDSmpaVC9mTkxuRUJaZlMxYUkyTUJFYTlINk4rYmwzaERIVFIyRWtPckdXZ3VNOTJCTmpDMTZleWtkSFhXREZHUDc3Qm4zSVVOS3VBbkFHZmJWUzZjenZOekpVaHNDR0JmYWIvaTl1bWxiUmdtcTZuVmVoSTVNdHQrQStkZ3BKQXlCQ0JPOFdnakU0MkU5clFWbkhwbFFtUTZlOUxpVEN1ajdFL05QaFQvNWNoQWw5U25MbzBKQWV1YktPNDNFWUUyTW5QajZLaXQ0L2huekwwcDc0akt1Q25MZTluVDMzZFNHMXpXUWhjVG9CcGZqNFVoZ3cvWS9zWS8xTUdmc24za2lmSkZVZFRBb29FWEYrdXFia0NCRlltd0pyK1RSWERicTYzNXV5enlRNkdmNGxoWDNxdTVFdlRDVG1hRWRCVWFweUFsZTBYbDd1QXdINk9mN01Xa2ZuR1pRb2ZTWDBZL3FYRy9KTHpjUVNhYTUzdkY2aHNmZ3FCZFFpd29VOGJSWURoeCtCZllzRFgrcTBjQWEwaHdleUJKbnJnYmgwdHpsVWdjQVlCRnZpcDMraWxhTFhlKzFvS25PdmdTS3dsQTVKTEhJSHFPb0VGZzg2d1hmemtRZ0lZLzdvTlhUMStERC9HZWkxanZlVjF0TTRFamtCVi9ZQVRjS0U5NCtjTENHRDg2elZ1UXYwWS9TMk45VmJYTGtNRDlWcEsranZoQkN5d1laeDZKZ0dNZngxRmcrSEg4Rzlsbkd0ZWwyVEJPdnBpZnhlY2dEUHRHaitiUVFEalg2Y3hQenc4TUozdkN3NUFUVU85OWIxd0JPcm9EdW5vR2FxY1V5Q3dqQURHZi9zR3pBSStHUDJ0RFhIcjYydEJJZklETnRjbE9BSEx6QnRuVHhIQStHL2JZS1VRV2JrUDQ5L2FPTmU4UHpNR3R0VXBSQUttTEJyZnpTYUE4ZCsyb1dvT05ZdjRZUHhyR2w4djkySllZRnZkZ2hNdzI4eHg0aGdCalA5MkRWVGgvdXZyYStiek05YWZYZ2JrQ0RBc3NKbXVZVGhnekxqeDJUUUJqUDgyRFZMWi9ab243YVVYUmptSVBuaVJBVVhET0RZaGdCTXdiZTc0ZGtpQTVYMDNhWVQyOVBSRXVKOGVQODdmaEF3d0xMQ043akV6bGcwZUdqbmVqeE5nWTUvMUd5QkpmdlN5dmZTeWV5a0hTWUxyNnlIcDluR3R6NmNRa0dZd3U5NUU3QkpmVkZ2MGt1U0hBOUNMNGZWVVRxSUJteWpPYnhnN0NId2lzRGYrMm11YVl3VUM5UG94K3A2TWFjOWxJUnF3Z2tKNnY0UjAvUFVuQThBSGVRbVkyVmN6Ky9NdUk3eTdoSUF5L09uMTR3RDBiSFM5bFoyWkFwZG9wRSsvbGE3L210Zmk4ZVQvQ0dEOFB6V09zejhnd3grajc4MXdSaXNQTXdYT1ZrK0hQOFFKK0djRms3NHhzeXQ2L29mdDRyei9GZkpYTHlXYXd1VjVjR3E4eVlEV3oyRGRnUFAwMU1HdlhtVURrcG8vSHR2TW5nNEVnbi9QSUVDaUgwYlNtNUdNWGg0U0JNOVFWT00vZWNFU0ppUmdaci9INVlGUDV4SlF5SjgxL05zWmZ4a0I5UVpWQnpjM042WmtNZjBwVEt3LzdhcW9QK1ZrblB0WHJsR3VXZTZoZStwUDl5ZmZvNTBNYUZFdHRVT09pd2o4VG1nQzh6NHlxL3hkMUZoMlAzNTdleVBrUDdHZ3k2VTlVQmxWR2ZoaTJJdEJseUgzR3Y1OWZYM2RPUnB5R2xSZU9RdkZTYmlVQjc4LzdtUklUcnpLeE9XYXB0b1ZXQzB3ZzB0Z1pqZlZSQ3JvalI0ZkgrbjFyV1Q4WmVqVmkxWlBUa01wTXFKUmUzUjZMamt3ZWs0OXI1d0RvZ2ZIRGZzU3AwZE9nRmJhNUxpSUFBc0ZSWFlDOWhuL3hNc3VhQ1BxMlMxUlRKejdydUNscE5VcmxnR1VzcWJYOXI4Z3l1a1JEOG1XSWg1eWlKQ2JkN2xad2tJTU9jNG13Qm9CVVIwQXB2dWQzU2gyUDJTOGY1bENWczlXUFZ3WmUvVjZvL2JxTDVPcTQ3OHUwUUlaTkhGY1lnU3puNnZvQ3NmWkJKZ2VHTkVKWUxyZjJRMWkxMU5WN3pXN1lwMTZmaGw4OVY1TEdQOTgydnp5R0lFeWZNRFF3V2xuVkZFVUlrekhKT25rNTB3UGpPUUVrUEYvVXVDUG5pQ2x5emp0WjRVckppV2NqNkk5S2o2YmZxR2hBemxjY3J5UTBjOHlTbkxnUmVMM0VNa0dwbjBXTXY3UGJ3UlNybE85M216ZlNhRXF2Q3FuaU1NZkFlVVJ5Q2tqV3ZYUkdWQTc1amlMQUZzSTkrdzVtTm0zczZxZEgrME1YVFlEUC9hOENqZi8vUGx6bDUyUFdQUkRRTkVCT1dza0ZQN3ZESkFjZUxic3NudGdqMDRBU1g5bkMveXVGelZtREROOHBsQnlTZDRqY2U5OEdmTDBTdzNSYUcyQzdNbUVPQUZuU2FWbUJyQnhVRzlPQUVsL3k0VTljNlkvUm4rNXZQVDRpK0lNWkIwbTBCQUp4MklDSkFYMjVBQ1E5TGRZd0hmVDFMS0ZTOVhiSjd5L1hGYWkvRUxEQkJsekJwUTBTWFJyc1JTelhIQVBUb0NaL1ZoY3RjbC9vRjVSbGg1UnlkNG5rUys1MEI4OHZoSUlaUmd6REhQcEdlWHM0d1FjQ01IcGYwa0s5T3dFc05MZmFRaytQQ09MOFNmRWYxanovRDlHSU5NUWdaeCtQUy9IYkFMa0EzaDFBTFN2TStQK3N3VjVkMklHNHkvRFQyOS9tVnh3OXY4RUZCV0luamlJRTdCWTJ1VXhYWG0xZzJuTFpXYVBpNnN5OFErMG0xL1V4VlBLMkQ0aHpzUUN2dUtqeTFGV3JrRFU0UUdjZ01YQ1FqNkFKMCtEY2Y5bEFoelYrRXVSS2FrUHc3OU1Iamg3SGdFNUFyOS8vdzZaTDRNVE1FOEdCbWVSRCtEQkNXRGNmeUNTTTk1S2lVWHIrUlBtbjFIeG5MSXFBYTBySUtNWktTcUFFN0JJUk1nSGNPSUFrTVV5VTI2ampmbGorR2RXUEtkdFJpQ2FJNEFUc0VoVVhqM1l3TFJsWUozLytjSWF5ZmhqK09mWE8yZldJUkRKRWNBSldDUXo1QU8wOEVCWTUzKytrRVl4L2xKTVpQVFByM2ZPckU4Z2lpUEFPZ0dMWklmOUFtbzZBYXp6UDE4NEl4aC9HZjdIUnlaNXpLOTF6bXhOSUlJamdCTXdXNHFZR2xqWkFjQWF6SkJOWmNQM3ZMd3ZobjlHSlhPS2F3SzlPd0lhYnVPWVJlQ3BwZzFNZXk4ell6ZUxHZkxZdS9Gbk90K01TdWFVTGdnb0N0ZnpPZ0pzSURSYnpHN1NHdVlhRDA3b2Y3WWdkcnV1dVhvY1VwZ2NFSWhHb09maHVMdTd1MmpWc2NYek1EVndTMGVBMWY3bXlhejIvZTV0ZmpJSmZ2UHFsclA2SjlEcnNJRDBDc2RKQWk5YjJzQzAxeWIwZjFMd2RpZmMzOTkzWmZ4WnRuZGV2WEpXTEFLOURnc3dDMmVXSExKSzRKcWVDcUgvV1VKbld1SzNwNTQvNGY1NTljcFpjUW5JRWVncFVWY09PME4wSitXUm9ZQ1ZIUUN5L2svSVhFL2ppMUlpMm1tTkF3SVErSitBOWhqb1pZbHVEZGV4MzhaSnlXVW9ZQTBuZ05EL1NVSGJOVVkxeWg1Ni8rcjFvenhPMXlsbjVDUFFVelNBNllHejVKTlpBWmM0QVlUK1p3bFpGeG4vNnQyb2w4TUJBUWhNRTlBVTJCNmNlV1lHVE5lam1Xa280T29TRzVqNnQyVDlueFF3NnlIam43SCswL1hJR1JBWUV1aGxTRTlKeHh5VEJOZ3I0Qnd2eHN5dUo3SHlwWG5QK0tmWGo1QkM0RElDUFVRRG1CbHdzbzdaSzJDcEUyQm1yQVl6SVZmcUlYZ09FOUxybjZnOHZvTEFBZ0xlb3dGeTlGVkdqcU1FL2l5MWY2blBaNXZmbzRLMCswSkpkSjZUL243OCtESDlBSHdMQVFnc0lxQTJyekYzcjA0L1NZRW5xL05YYXFNKzkrSDNpWDhuYVdZK3dldTY0dW9KYUpVekRnaEFZQnNDU3FUMTZnU1FGRGhaNTZ3Tk1NY0pJUEZ2VW9oMkJ0YWpBbEJFZ2pEZ2ROM3hMUVRXSU9CNVNJQjhnTWthWm0yQUtTZUFPZitUd3JNenNPcGxlM01Bdm4vL3p0eis2YXJqV3dpc1NrQk9nTUx1M25RQml3U2RyR1lTQW84NUFTVCtUUXVQeDNGLzV2WlAxeG5mUW1CTEFoNW5DWkFQTUZuakpBU09PUUFrL2swS2pidjUvbkpHQ1BkTjF4bmZRcUFHQWVYZGVJc01zajdBWk0yVEVEaDBBbGp4YjFKWWR1dm1ld3IxYWZNU3h2dW42NHh2SVZDVGdMZThBRGtrcjYrdk5SSDBkQzlXQ0R4d0FOanM1NGo0ZW12WWpQY2ZxU2craGtCakF0SVZubllXSkI5Z1VpQllJVkJPQU5QK0pvWEVQRTM1WTM3L2RGM3hMUVJhRTlCNkFYTFN2VVFNbVJvNEtSRWtCSnJaeXlTaXhGOXFiTTlMUTFheUVRY0VJTkFIQVUvSmdlUUtIWldaM05NQ21mWjNWREIyWSt4ZXN2N0o5RDllVDN3REFhOEV2RGdCREFWTVNramVLQURUL280TGhvZlF2eEo1OE42UDF4SGZRTUE3QVM4ckIyclhVbzVSQXEvRGZMZzA3K245andyRDdrTVozZGFoZjNudGIyOXZ4d3ZKTnhDQVFCY0VucDZlbWs4VFZHZUNtVU5IeGVVMmplRXZEMHJ2LzZnd05OL29SOGFmeG5xOGZ2Z0dBcjBSOERDYmlBV0Nqa3BOcm1tQjlQNlBDa0x6Qlg4dy9zZnJobThnMERNQk9RR3RGd3hpZ2FDakVwUmpjU0FXL1RrcUFMdGVkOHZRUDhiL2VOM3dEUVFpRU5EaVBDMmRBTjFiVXhVNVBoSElFUVZneWQ5UEZmL3ZBeG5nVmc0QXh2OWZOZkFHQXFFSnRIWUNibTV1UXZPOTRPRmlSd0hvL1I4WERZWEdNUDdIK2ZBTkJDQ3dIb0hXVGdDemkwYnJNbllVZ043L2FLVTNuZk5QejMrOFR2Z1VBdEVKdEhRQ3BIY1lDaGlWc0poUkFIci9vNVc5KzdEVit0MFkvK04xd2pjUXlFQ2dwUk9ndFU0NFBoR0lHUVdnOS8rcG9uY2Z0RnJ3QitNL1hoOThDb0ZzQkZvNkFTd1FOQ3B0c2FJQTlQNC9WN0xDWDBxR2FUSHVyMHhjRnZuNVhDZDhBb0dzQkZydU84S0dRWitrTGxZVWdONy94d3B1dlNpSEdqc0hCQ0FBZ1NHQmxzc0dheGlVeGNlR3RXRXhvZ0QwL2o5VXFyVmVscE5kL1Q3V0IvOUJBQUx2Qk5RYmJ4R1YxRDAxTEtuaENJNGRnUmhSQUZiOWV4ZG5qWGUxYWx5Nkw4Yi92UzU0QndFSWpCUDQvdjE3VXozRmFvSC82cVgvS0FCci90dHV1a3VyOGY3aWNMRDR4cjlHeFJzSVFHQ0NnUEtUV3MxTUt2cUt2SUJkQmZVZEJhRDNiN3R4cmRhTmlUbTNFOXFPcnlBQWdVOEVXdWNweVJIUTVrR3NGV0IzWlFPOTdsNno5LzQ5TkNLbSszM1NiWHdBQVFqTUlDRDkxWExmQURrQkpBZmFuKzRNdndxY3ZmZnZ3ZmlyOGFvY0hCQ0FBQVRPSWFBbGUwdFl2dFVyblJqNzFwMFRZR1l2NXdoY2hOOW9qbjFyejFtTlZkTjZPQ0FBQVFoY1FxRGw5TURpZENSM0FsNjZjZ0RNN1BvU2dldjV0MTZNLzQ4ZlAzckdTTmtoQUFGSEJEUWVYNHh4cTlma1RrQS9VUUF6ZTNRa3U5V0s0c1g0cTZHUVBGT3QycmtSQk1JVGtENlJYbWxsL010OUV6c0JUMTFFQWZZTC80UnZFSWNQNkdITVg0MkVjZi9EbXVGL0NFQmdEUUllOGdHazR4STdBVmZ1bllDTXZYOHZ4bCtOZzNIL05WUWQxNEFBQk1ZSWVNZ0hTT3dFK0Y4WUtOdlVQMC9HbjNIL01aWEZaeENBd0pvRVBPUURGQ2NnMlZDbjc0V0JzazM5OHpJdVZockRtbzJjYTBFQUFoQVlJK0JKNzhrWlNYYmN1aDBHeURiMXIvWHl2akw4K21QY1A1a0s0SEVoMEppQWwzd0E2YjlreXdiN25CS1lMZm12OWNZK3hmanJsWEgveHRxUTIwTWdJWUdXT3djTzlaL2VKOXRBeU4rVXdFekpmeEsyUXdGczliK1d5dVNBQUFRZ1VKdUFwNkVBNlY5RkpaSWM5NjZHQWN6c3lzeVVvQkQrVU5KZksyTS9kbCtWaHdNQ0VJQkFDd0tlaGdJU0RZWDZTZ2JNa3Z6bnplUDkrZk5uaXpiUFBTRUFBUWo4SStCcEtDQlJVcUNmWFFLekpQOTVFblF0aHNFQkFRaEFvRFVCYngyakpFbUJQcElCc3lUL1BUdzhFUHB2cldtNFB3UWc0SktBcDZHQVJQa0ExODF6QVRJay8ybWMzY1B1ZmlVSGdOQy9TeDFJb1NDUW1vQzNDS2tpRThHUDlpc0RabGo1VDVuMnhmaTJmaVgwSDd4SjgzZ1E2SlNBREs2bmpwTFdhUWwrL0cwYUFUQ3o4SVM5aGY1ZlgxK0R5elNQQndFSTlFcmc2ZW5KVFdjcHlWQkF1elVCb29mL1BhM3pMMkcrdmIzdFZTOVFiZ2hBSUFrQkwzc0ZTR2NxWWhwOEtLRE5Oc0g3dWYraFJWb0d0M1hJZjNqL1JBdGRoSllySGc0Q2tRbDRXaWhOK2pQNHJJQTJhd0pFbi92dkxmU3ZzVFVPQ0VBQUF0NEpxTWM5N0xoNGVCKzg4MVIvVFlEb2MvOFZPdklndUtVTWlSYTQ4SzdmS0I4RUlIQ0NBUHJ6QktCMXY2NjdKa0QwdWYvZVFsaHlBb0tIc2RadERsd05BaEJvU3NEYjhLbDBxQklVQXg5WDFXWUVSQTcvZTB2OEt4R0E1K2Zud0xMTG8wRUFBcEVJZU94RUJVOElyRGNNRURuODc5RnpsUlBBOUw5STZwRm5nVUJzQXVxd2xNNkxwMWR0NHg3MHFETU1FRG44cjk2L0oyRWRsaVdvMFBKWUVJQkFRQUplZGFtU3FRTlBDOXgrR0NCeStOOXI3MThyRVhKQUFBSVE2SW1BcDFVQmg1MnB3RkdBN1ljQm9vYi92WHFzRXR3RVMxcjJwTmNvS3dRZ01JT0Fwd1dCaGc1QTRDakF0c01Ba2NQL1hudi9FbHdsMUhCQUFBSVE2SW1BcDgyQmhnNkEzZ2VPQW13M0RCQTEvTys1OXk5aERiNklSVTg2amJKQ0FBSXpDWGhiVEczb0JBU09BdHh1TmgzUXpFTE9SWk0zT0JRT2IrOERKNjNNVkNXY0JnRUk5RWJBZThmcThmR3hONlJ6eXJ2ZE1JQ1poZHhnMmR1cVZVTUhoQVRBT1RMUE9SQ0FnRWNDWGhNQnBXT0Q2dFp0OWdZd3MyOGVCZXpTTW5rT1UwbElTUUM4dEliNVBRUWcwSXFBak95d1ErUHRmZERoMWZXM0NJNjY5YS9YVE5YU1VBSW5xN1RTU2R3WEFoQ29STUJ6Y3JWMHJNb1g4TGhmUFEvQXpQNUVBK1Y5akVvQ3loTEEwYVNPNTRGQUhnSWVsd1F1blN1OUJrMEcvTE9xQTJCbUlWZWk4ZTZkU2tEbHBIQkFBQUlRNkpHQVF1eERnK3Z4ZmRCcDF0ZXJPUUZtZHRlajhKMHFzK2ZrditLZG5ub0d2b2NBQkNEZ2xZQm1NSGswK3NNeUJkMXFmYjFWQVNPdS91ZDFzNG9FZ3VsVlYxRXVDRUJnQXdMZU8xclN1UUdUQWRlYkRyaUJURFMvWkEvaGY2Mmt4UUVCQ0VDZ1p3TG8yaWExdDg1MHdJalQvM3BJL3BOWFNnSmdrNGJEVFNFQWdSVUplRThFbEs1Vk1tREFmS3ZMcHdPYVdiaUY2SHNJU1Vrb1gxOWZWMnlHWEFvQ0VJQkFmUUk5RExkSzN3WmNjK1h5NllCbUZzb0tlVi8yVjRKWS91bzNWZTRJQVFoQVlGMEN2VVJjcFhlRHpRaDR2V2dtZ0psZHJTc0tiYS9Xay9FUHVreGxXd0hnN2hDQVFCTUNucGNFTGgydThocHNqNER6ZHdjMHM1c20wckxCVFhzeS9oTEVvQ3RVYlZDelhCSUNFUEJPUU9IMVltQjdlQTBVQ2JnNU93b1FZZnhmNFNmdnkvMk9OWWhBQXVoZE4xRStDRUJnWXdLYTBUU201engvcGs1WWdNVEE4L01BZWg3LzF3SVU2dlgzRkhvYU5vYUE4MUkzVmpGY0hnSVE4RXJBKzZaclE5MDdmSytFY2RtUmpvL3o4Z0I2SHY5L2VucnExdkFYNFpNRHd3RUJDRUFnQW9HZUVnR0xEaDYreWhIb3VGTzJQQStneC9uL01wcTlqVFVOaGF5OEp3RXdnc3JqR1NBQWdTR0JYcU94UlMvclZVTVpIWGJPbHE4SFlHWmR4VDNrbmZVeXYzOG9VR1B2ZzY1TlBkUUZ2SWNBQkpJUmlLS2Y5UnlkNVFZc3p3UG9hZjMvSGxhYUdqUDB4ejVqQmtBeXpjampRaUFCZ1FqUjJhS3pGYzNvYUxyZzhuMEJ6S3lMUWVqZXB2Y1ZBWnA2N1R6cEpJRXE0eEVoQUlHbEJIcllFMkJLTDQ5OTE0bXUvcnRvS3FDWlhTK3QzQmJuUnhRb0NWbEhubVdMYXVlZUVJQkFod1FpZHRha3J6dHhBcTVuT3dGbWR1dGR2cUlhZndsVXg5bW0zc1dHOGtFQUFvMEk5RG9WY0t6bmYvaFpCMDdBM1JJSDRMR1JqTXk2YlZSUHNnZ1Ztd0RORWdOT2dnQUVPaUtnamszUmNSRmZuVHNCRDBzY0FMY2JBRVUzL21vWUhCQ0FBQVNpRWVoOUxZQTVUb3ZqNGR2NUN3SjVGYnpvSHFRRVRObWxIQkNBQUFRaUVwaGpSSHMrUi9yYmNRVDM5SUpBWGhjQWt2Y1laUjdwbElDekJrQkV0Y2N6UVFBQ0lwQkJoK3NablM0V2REb1IwTXp1UElwcTVLUy9vVU9ndWJJY0VJQUFCQ0lTMENxblEzMFg5YjFXREhSNG5FNEU5TGdEWU9UczBjTUc0RlJ3SE1veVJZSUFCSG9qa0tVako3M3VjRGJYNlVSQWJ5c0FaZ245RjBlQWJZQjdVMm1VRndJUW1FdWd4MjJCaTI1ZStxcWhBR2ZINlVSQWJ5c0Fac2o2SHdyVzgvT3pNNW1oT0JDQUFBVFdJUkJ0MmZhaDdoNTc3NnhETjcwaW9MY1ZBRE5NR3prVUdvZGhvM1ZhUGxlQkFBVFNFMUFINTFEblJmNWZzd0tjSlFSK1Bib2VnSm01eWtETE5GNVVHb0V6WVVtdnNBQUFBUWlzUjBCVDVJcXV5L0xxYklHZ215a0h3TTBXd05uRy9rdGpXSytwY1NVSVFBQUN2Z2lvZzFOMFhaWlhaMnU3SEo4SllHWnVCcUF6WmY2WGhxQXBNaHdRZ0FBRUloT1FRU3c2TDh1cm82SGQ0ek1Cek16TkVzQlo1b3NPR3dDTEFFVldlendiQkNBZ0Foa1dBeHJxZGIxM3BOdVB6d1R3SXA0Wng0a2tKTXA1NElBQUJDQVFtWUFXT3pzMGtCbitkNUxmTlQ0VHdOTU1nR3hUUllyd08wc1dpYXlEZURZSVFLQVJnWXpKM2RMeGpqWUsrandUd05NZUFBcVhGS09ZNmRXUmdEUlNEZHdXQWhDSVRpRGIyaTdGaGpsYTV2M3pUQUF2ZXdCa3pCSXRBdUlvVVNTNkR1TDVJQUNCUmdReUpuaEx4enVhRGZCNUpvQ1hQUUJrQkl0QnpQYnFlQnZKUnFxQzIwSUFBdEVJWk5ieG10N3U0TGovdEJhQWx5bUFXY05EY25ZNElBQUJDRVFua0hHRjE5S1pkVExNK3p6bUFMaVlBcGcxUTlSUmVDaTYvdUg1SUFDQnhnU0tRY3oyNm1TMzF6OWpEc0RmeGpLeHUzM1dCRUJIODBROWlBRmxnQUFFQWhQSXVCYUFuQjBuVTcwL1RnVTBzeXN2c3BaeGxTZ0pocU1NVVMraVFEa2dBSUdnQkRJdTlDWTk3MmkxMTZ0L1VRQlBVd0N6aFlUSzh6cnhESU9xR3g0TEFoRHdSQ0RyVUs4aUgwNk82NkVENEdZWHdHSVFzNzJ5Q0pDVFprRXhJQUNCelFsa1hReklVYTdYKzFvQVh0WUF5SndkaWdPd3VjN2hCaENBZ0JNQ1dSMEFkV3lkSE85ckFaaVppMjJBY1FDY2lBYkZnQUFFSUxBaEFXWERaNHZ5bHVmZEVPdVNTNyt2QmVCbERZRE1Eb0NUK2FGTEJJaHpJUUFCQ0p4RmdQVmV6c0syNW8vZXR3VTJzNWMxcjN6dXRUSXZBNHdEY0s3VThEc0lRS0EzQWxrZEFFYzVBQy9ESkVBWGl3QkppRXVZSk5zcit3RDBwc0lvTHdRZ2NDNkJyUHNCT0pvRjhMNFlrSm01V0FSSXdwVE44SmZueFFFNFY1WHdPd2hBb0RjQ09BRE5hK3g5TWFEbVJSa1VJT3NLVVRnQUF5SGdMUVFnRUpwQVZnZkEwNHF2dXlFQU0zT3pNb0VrUHFzRG9BUklEZ2hBQUFJWkNHVGRFZENUQXlCenEwbUoxNTRFRGdmQVUyMVFGZ2hBQUFMckU4QUJXSi9wR1ZlOGxnUHc3WXdmYnZhVHJKc0JhUVlFQndRZ0FJRU1CTEpPK1hhMjVQczNPUUJ1bGdHVzRHZDFBREkwZXA0UkFoQ0FnQWpnQUxpUWcxczVBTGN1aXJJdlJOWWxJajNWQVdXQkFBUWdzQ1dCckE2QVZrQjBkT3djQUJmTEFCY29HUjBBUjNORFN6WHdDZ0VJUUdCVEFtVUtkS1pYWjN1Ky9GSUVBQWZneTVlbTZ3L2dBR3lxWjdnNEJDRGdrRUFtdzErZTFhTUQ4TGJDTjRZQUFDQUFTVVJCVk9oSk5qSXVFWGw5N1dvaWhpZHhvQ3dRZ0VCUUFsb1d0eGpHTEsvMzkvZWVhdk5CRVFBY2dNWVJBR2R6UXowSktHV0JBQVNDRXNnNDVkdlpuaTg3QjhERlJrQkZ4dVVoWmZFR3kzUGlBSlRhNXhVQ0VNaENBQWVnZVUwL0t3TGd5Z0hJdUVUa3pZMnJtWmpOcFpJQ1FBQUM4UWxvNkxOMGdySzhPbHZ5L1FVSG9ISDRYNEx2YkhHSStKcUhKNFFBQkpvVHlMam1pMGNId00xV3dKTEk1K2ZuZEY0aERrQnpYVVFCSUFDQnlnUVUrY3pTOHkvUDZjd0IrS01JZ0t0ZGFES3VFZTFzYWtobE5jRHRJQUNCakFReXJ2bmliTk0zSElEaW1iVjh4UUhJcVA1NFpnamtKb0FEMEx6Ky9Ua0FHWmVJZERZM3RMbFVVZ0FJUUNBK0FTMkwyN0xqMWVMZXpqWjkyemtBcmlRdG93UGdiRzZvSzNtZ01CQ0FRRXdDR1JkOWMxYVRmNVVENE9yQUFYQlZIUlFHQWhDQXdDWUVjQUEyd2Jyb291NGNBSlcrUldpbTVUMkpBQ3lTV1U2R0FBUUNFTWptQUhqYzh3VUh3TUU2QURnQUFiUVpqd0FCQ0N3aWdBT3dDTmNtSjd0MEFMSnRFb0VEc0lsc2MxRUlRTUF4Z1d3T2dNZE4zMXc2QU5uV2lNWUJjS3lsS0JvRUlMQUpnV3dPZ01jOVgzQUFHQUxZcEhGelVRaEFBQUpUQkhBQXB1alUrYzZsQTVCdGt3aldBYWdqN053RkFoRHdReUNiQStCeDB6ZVhEa0MyVFNMVUVEZ2dBQUVJWkNLUWJTVkFqM3UrdUhRQXNtMFNnUU9RU2UzeHJCQ0FnQWpnQUxTWEE1Y09RRGJCd0FGbzN4QW9BUVFnVUpjQWVyNHU3N0c3eVFINE8vWkZ5ODhRakpiMHVUY0VJQUNCN1FtZzU3ZG5mT29PY2dCY2JRZXNBbWZiSklJSXdDa3g1WHNJUUNBYUFSeUE1alhxYnpkQUlaRkJiTGswYisxN3krSGhnQUFFSUpDSlFEWUh3T0Y2THpnQXRZMzkyUDNVRURnZ0FBRUlaQ0tRYmJZWERzQk02ZGE4K0RGREdmVXpISUNaZ3NGcEVJQkFHQUxaSElEbjUyZHZkZmVxSElBWGI2VjZlSGpBQWZCV0taUUhBaENBd0lvRXNqa0FMeS91VE8wTERvQ0RwWUNKQUt5b1ZiZ1VCQ0RRQlFFY2dPYlZ0SE1BM01VbDVDbEZEZmVQUFJjT1FQT0dRQUVnQUlIS0JMSTVBSyt2cjVVSm43emR6Z0Y0UEhsYTVST3lPUUFlMTRpdVhPWGNEZ0lRU0VZZ213UHc1NCs3R2ZjUEdnSnc1d0RJVXhycktVZjlUQTJCQXdJUWdFQW1BdG0yZmZmcUFMamJpVWFnb2hyN3NlZkNBY2lrOW5oV0NFQkFCTEk1QUE1ci9aY2lBRGdBalJNQmNRQWNOZzJLQkFFSWJFb0FCMkJUdkhNdXZuTUEzSzFDOC9mdlh5SUFjNnFQY3lBQUFRaDBTaUNUQTNCMWRlV3hsbTRWQVhEbkFJalVXS2c4Nm1kRUFEeTJEY29FQVFoc1NTQ1RBNkJuZFhqY3lBRndtWUVXMWRpUFBkZjE5YlZEMmFCSUVJQUFCTFlqZ0FPd0hkdVpWLzRtQjhDbDlVRTRabFlocDBFQUFoRG9rTUJZWnlqcVowNmp2TmR5QUZ6R0puQUFPbXpSRll1c21TSmFMMktMUCtXZ2NNUWpzS1hNT0p6aTViNENveHI3c2VkeTZnQjgvYUxEbzZUZ0FIaXNsZlpsa3NIWGtNbFlJMXZ6TTYzT2lGSnZYOTlybEVEMUtBVzhwbnlNWFV0eWljek1yN0V4aGxFLzgrZ0E3SXovM2dGdzErV3AwV0M5Q0p1Y0hZN1RCSjZlbmpaWDRrT1pVTDBRRFRoZEw1N1BrRUd1MlpsUXRyZkRKVjlkVnRHd3JVVi83M0M1OTc5REI4RGRHb1daSEFBSlA4ZHBBalVWZVZGSXYzNjVXeWJqTkNqTytFZEFpcmZVWmExWGo3MjlmMENjdkpGalZxcytQTnpIb1FQd09uUUEzTzFUcVBYeFBWUmNyVElRT3B6V1RLMzJoeUE2TTEwdjNyK3QxWDRQNzBON25wYU1WdTM1c0o1cS9YOTNkemNOcFA2M0wwTUh3TjErQUMwODkxckNNSFlmd29iVExlRGg0YUdaUXpoZE1yNzFTcUJsTDFNR2p1TTRnV3dPZ01OSTR2UFFBYmcvWGxWdHZzbm1BRHcvdTl1VnVVM0ZIN2tyRHNBUk1IeDhsQUFPd0ZFMHpiOW8yWjdIT21CYmYrYlFBZmcxZEFEY3hTY0ViT3RLOFhUOXgwZDNRWmptU21KWWdKWUtZMWdPM3ZkREFBZkFiMTFsMCsvMzkrNzYySGREQitER202Z2dJTjVxcEcxNWNBRGE4dS94N2pnQWZtdE5ZK0tlT21CYmw4VmhCKzltNkFDNFd3MHdtd1BnTUVuRWxmYkFBWEJWSFYwVUJnZkFielZsUy9KMjZBQjhHem9BN3JZcWFxbnd0L1lHeDY3dmNKcUlLKzNSVWg1Y2dhQXdzd25nQU14R1ZmM0ViTk84SFNhRlh2MXpBUFRHekZ3dEJ0UlM0WThaNkswL1krN3d0QTVxS1EvVEplTmJyd1J3QUx6V2pGVlp6WE5ybmIzaytzNGNnUGRGZ0lvWFlHYXVGZ05xcWZDWFZPeGE1ekxmZkZwWnRaU0g2Wkx4clZjQ09BQmVhOFpNS3lhdXBUdDd1STR6QitCOUVhQ0JBK0JxSGxxMmVhSTRBTlBLQ2dkZ21nL2ZmaWFBQS9DWmlaZFBlakRhYTVaUnN1am9lRjhEWU9BQXVKcW5rTTBCa0xCeEhDZUFBM0NjRGQrTUU4QUJHT2ZTK3RPVzliS21VVjl5TFdjT3dIMngrLzllemN6VldnQUlTZXRtNnV2K09BQys2cU9IMHJUVUljNUN2cTZxSzJQbnp0bW1ZdTlyQUJRUHdNeGNyUVhRc3ZFdThleldQTmVabCtoS2FlQUF1S3FPTGdyVFVvZmdBQndYa1l3T3dIRWFUYjU1bndJNGNBQmM3VW5ic3ZHdWFkU1hYQXVsY2J3eDRBQWNaOE0zNHdSYTZoRGE4bmlkNk5PV2JYbUpQbDd6M09NMG1ueHpYZXoraDFkdlV3SFhySUFlcnVWd3NZZ20wamwyMDVaS1k2dzhmT2FmQUE2QXp6ckt0c2liWmp4NE9qNFkvZUUvWnZicXJLQ3Bwb280WEMvYWpUamdBTGlwaW00S2dnUGdzNnF5TFFQc2JJYlg1eW1BeFFrd00xYzcwbVNiSzhweXdNY1ZGZzdBY1RaOE0wNEFCMkNjUyt0UHN5MERmSDN0YXFYOXoxTUFCdzZBcTVrQThweDZDTjJ2VlVhV0F6NnVtbG82QURJa0hQMFJhSmxzUmc3QWNYbkp0Z3l3czFWZTM3Y0JMb2EvdkhxYkNaRE5BWkJuekRGT29LVURRRzdHZUoxNC8xUkRhbXM1NTB1dmd3TndYRHJVSTE3S3MrZnpuVGtBNzdzQUZzTmZYczNNMVV5QWJJTGlMRlIwdkFVMytLYWxBK0NzQVRlZzMrY3RXK29QSElEak1wTnRhTmVaL2hpZkFUQndBdHhzQ2lSd1BYdCtTOHZ1TEZua2VBdHU4RTFMQjBEMXlEQkFnMHEvNEpZdHcvK1NGeHlBNDVXM1ZDLzJmcjZqb2QzUG13QVZ3MTllUGMwRXlPWUFTTkE1eGdtMGRnQ2NlZkhqa1BqMEg0SFd3NGM0QVArcTRzT2Jsb21aclJ3SlJ3N0FTN0h6UjE4OXpRUVF1RmFWMXVxKzlEUS82SXQvLzdSMkFDUVBtci9NNForQUI3MkJBekF1SjYwak15MzB1aU85OFhrUGdFTlB3Tk9lQUI0YWNtMkJ3UUVZVnh5dnI2OHVuRUZIalhrY1ZQSlB2ZWdNWjJ1L3U1RUtISUNtVmZGNUQ0QVJCOEROcEVVdmpibW1FMERQNFhnRDhUSWtoQk53dkk1YWZ1TkZYekNiNTdnVWVJamsxZFRudXBjamZmRjVENEFSQjhETnVvVUNWN3V5V3QrUEtXZkhsWWVpQUY0eWlLWGtpZFljcjZ1YTM3eTl2Vm5MalAraHpsRHVBWEp4dlBiUjZjZlpiUDNOb2EwLytyK1hSTUNNd3NKcWdOUE5RTXJWUzA5UGlsOWxVZFNHa085MHZhMzlyWGcvUFQyWmw2aVFIRk9WQmVNL1hkUFpWZ0dVam5EU3FUdStCUENoSitBbEViRGxRaDVEcjc3bWU4S0gwd3BrK0syVTdhVi9NdDRLUzY2aG1HUUUxQVBrYjFzR2wwYUI5SHZWdCtwZFVhVkxaUWlqUDJ5VjArKzlPR3cxZGZyejgvTTBsRHJmUGh6YSthUC9lMGtFekRoZUpPUEIwWWFBRkxtbjZFSk5KWlhsWHFwZm9qVnQycGZ1ZXFuejFxT2NPc25ydWoxcThBKy9NRE1YaVlBWkhRQUpPRWRiQWo5Ly9reVhlOUtqWWwxYVp1a1RqbllFdk16a1dTbzNsNTd2eEFHWVhnRnd4QWxvdmlLZ1FpZVh3dS94OTRRVTJ5bXBjbWVjZ0MraDJoN0d2MGgydTFjWndoNzE4YVZsbHVQVCtEaTlBdUNJQS9EU3VOQzc1S3BMNGZmNGV5ZEpJNjJydi9uOTE4Z0w2Rkgrb3BWWnpoeEhld0laYzdyVWxoeDA2RTZ2QURqaUFOeTNGcG1zSVNNMUZJNzJCTlJ3TTQ1WlJuSUFtSmJYdmgyVkVtaUdVeVRabXZzc0RoeUE0MXNBSHhyKzhyK1pmU3NWMStwVjRPWkNqblNlRXBVNGZCQWdDdEQzVUFCdHlVYzdVaWt5emdDUVhYSnduRjRBcUJqKzhxcUV6ZFlGeitvQXNDMXdhOGw3djMvV1BKUW9EcldUQkt4M2dVcjhMbXMwelVHVlh4Vzd2dWkxOVlKQW1xNFRSUkV0ZVE0MUZBNGZCTEk2b1V2azFmTzVQcVNJVW1UVjVXb2JqWS81Q3dBZGVnZG0xbnd3MnJOeTJiSnNEc2FOR3N1dG45dHZXYzljZTdzaEJ0YlU4Tk9Hc3M0QWNDQ0RwM2NBUERUODVYOHp1Mmt0UWxrVnBKUFZvMXBYdjR2N1o1WEIzcC9iZ2ZKMUliOGVDcEYxQm9BREdid3A5bnp4cTRjOEFBSHNYUkdkVTM1bUFuaFFXLytYNFp6NjR6ZmI5ZXpuc25XZ2ZQMEljZU9TWkowQjRDQ2Y2N3p4LytJdHRNNER5T29Ba0wzY1dHTU5iai9YNEhCZWU2TS9yQU1jZ0lFUU4zNmJkUWFBbnJ2aGNmNzQvOEFCYUpvSGtOVUJjT0E1TnBSYlg3Y2VHaFhlK3pMeVUvV0JBK0NuSFdYVjQ0MGRnUFBIL3djT1FGTVhKcXZueUV3QVA4cHJ5c2p3blYrSEFBZkFSeHZLUEFOQTY0ZzBQSmJQL3krR3Y3enU4d0NhN1F1UTFRR1FZV0hYc29aTlozQnJqTHhmSXo5Vk56Z0FBeUZ1K0RickRBREpac3VoM0dMREwzNDFzMmI3QW1SZWlZMUZUQnBxcmNHdHA0d00zL2wxRG5BQUJrTGM4RzNteGJRYU9nREwxLzgvNWltWTJWMHIrUkhBckVxV21RQ3RwTzdqZmJQS1grL1BqUVB3VVk1Yi9mZnIxNiswT2x6UDN1aTRPMmJQRjM5dVp0ZU5IbUlYUXVsZEVaMWJmazJkNFdoUDROejY0M2R0b3dNNEFPM2Jqa3FRT1lyYjBBRzRYbXpvcDM1Z1puOWFpRlBXK2FNeUhvMFRTRnBVdDh0N1lzamJHdkp6K2VNQStHaE9tdEYwYmgzMi9ydEdVZHcvVTdiOHJPOWFMUXVjT1h5RUF2T2h3SHBYUWxuTFQvdWgvYlNXL2NmSHh4YVY4SENXa1ovNlVhdnRnVE03QUJKZVpnSzBhRDhmNzlsYWlYRC84eUlRT0FBZjViakZmNit2cjJsNy8ycTNqUnlBeTZmL0hUb0RyYVlEUGp3OHBCWWdOU0NPdGdRd3dPY1o0TmJjY0FEYXRodmRQZk1NQU1sL2c1bGNmdzl0OTJyL3Q1Z09tTjBCYU9SQnR0Y2Nqa3JRMnBCeC8vTWNFQnlBOW8wb2V3UzNnUVB3dkpyQlA3eVFtZDNXRnFuc0RnQXpBV3BMM09mN1lZRFBNOEN0dWVFQWZKYmwycDlrbmdFZytXL2dBTndlMnUzVi9tK3hPNkFBdGxZa0xlL1BUSURhS3V2ei9WcldQL2MrMy9uQUFmZ3N5N1UveVR3RFFHMzN6NS9xaytlK3JtYnd4eTVVZXhnZ3V3UEFuZ0MxVmRibis4bVFZSWpQTjhTdDJEWGVpT1d6SUNYN0pQTWVBRVhtS3pzQTY2MytOMmI4OVZudFZRRUZzTURNK2xwWmlKS3BxZE9QbTMwY3M5ZDJSLzdNYWRuZThvenNuVGUxbThxenVMWUwveGVIb1BZd0FBN0FGMnUwbU1TV3VxR3JhNnNSRXdYb0t3SkE3Nzk5RThOeFZuKzU2ckZ0K0gvZ0JGVGJISWd3VXRzZHBhcUtyK09ieVJITnZDOUZUMUdBSHo5KzFPNTVPWmJjZGtYTHZKTnJhUzhWNlc4Zi9oODRBRlVYcVM4d3M3NlN6RlN4R1oyNGxSd0JSV1RVdStIUEZ3UE5HS29jY2owaExibS9WdjVTVnAydDU2NnN0N2NQL3c4Y2dLdWFvazM0dGZwWVVzM3E1VjRRZ0VBd0Fvei9mN0hLdzFCMXd2OERKNkRhTUFDaDEyWkxTZ1pUU3p3T0JDQlFnNENpWkpsNy8zcjJpbXU0MUF2L0R4eUFhc01BQ0ZOVllhcWhIN2dIQkNBUW1FRDJCWURrQUdnWjVFcEh2ZkQvd0FIUU1NRGZHZzlJT09tTGFVRU5EZ2hBQUFJOUVHRFl0dW9pUUZmRkxsZDkxVjRQdFlReGUwS0pQRW9TbkdwSkcvZUJBQVRPSlpCOUIwRHA2b29kdHZXMy9wM3JSZFRjSWxqaktRS2IrVStSRUE0SVFBQUNuZ2xrMzc5Rk5xcmlJbFEzYyszMUp1Y3hERkRQS1dGQklNOXFqN0pCQUFJaVFOSjJ0ZkQvbjAyTStwS0xtdG12V21LZmZXR0p5dE5LYWxVcjk0RUFCQUlSeUw0QmtCeWdTa2U3OEg5eEVzeXNXblphOW1SQU5nYXExS3k0RFFRZ2NCWUJWbTZ0MXZ0WC9kU2QrMStNL3VGcnpSMENzMGNCbEdEREFRRUlRTUFqZ2V5ZHRJcTkvL3B6L3c4TmYvbS81ZzZCV29vMTg0d0E4Z0E4cWozS0JBRUlpRURtWkcxTmZaUjlxblRVbi90ZkRQN2g2MzZId0NwckFnanU3OSsvMDg0R3FPaGhWcEpqYmdNQkNFUWhrRGxDV3pIelg3YTJ6ZHovUStOZi9qZXorNXBDbkZYUUttOHdVYk5LdVJjRUlOQTVnYXpUdExVRFpjV2pmZkpmTWZ6bHRlYWFBQUt0VUV2VzFhWXFocGtxeWpTM2dnQUVlaWFRZGZ4ZmRxanlJbTAra3YrSzhTK3ZOWk1CMVZDeXJqaFZNZFRVc3o2aTdCQ0FRRVVDR2Zkc1VUNWE1UTZabitTL1l2akxxOWFBcUNodnUxdGx6QWVvdU10VTdlcmtmaENBUUtjRU1tNEExR0IxVmovSmY4WHdsOWZheVlDbG5mejgrVE5WVW1ERmRhWUxZbDRoQUFFSVRCTElOanRMZHFmeTBYN2x2MkxzajczV1hCbHdDRCtiRTFCNXpHbUltdmNRZ0FBRVBoRElOaHpid1BpTHQ3L2t2ME5IWUI4RitDQWN0Zjc1L3YxN21raEFnOUJUcldya1BoQ0FRR2NFTW0wQTFNajRTeUo4SnYrTk9BSFZ0Z2srYkNkWklnRy9mbFhiZ3VFUU1mOURBQUlRK0VBZ3l3WkFEWTIvLzk1L2NRUnFUd244SUlsbWxzRUpZR09ndzFybmZ3aEFvQldCREJzQU5UVCtxdGJyWWwrN2VLMDlKZkJROEtQUERsRENEWGtBaDdYTy94Q0FRRzBDbWdZWGVRRWc2Vm9OY1RROC9FNzlPK2FOdEk0Q3FMS1VtQko1c1NEMkJXallKTGsxQkNDd0k2RGh5S2dPZ094SDVYbitZMUxsZCtyZk1RZEFuMnZCdnJHbnFmbVpLaTlxZUVyQ3lRRUJDRUNnRlFIcDE2aWRMQTJ6T29peStwLzZkOHdKcUxsTDRLa0dFRFV2Z0NqQXFacm5ld2hBWUNzQ0VYZi9VOGhmUThoT2pqNTcvL3NJd0pXWlZkc2w4RlNGUmZSV0phd2E2dUNBQUFRZ1VKUEEwOU5UdU5DL2V2ME9RdjZsR3Z2dC9aZW9RS3VGZ1FyQnNkZG8wUUFuNDFSanFQa01BaEFJU09EdDdjM1UrWWd5OXUrczExOGtwdC9lLzhBQmNCVUZLR1NqUlFQa0JMQTRVS2xkWGlFQWdhMElhRE95U01iZldhKy9WSnZ5NS9wWStLY1krMk92SHFNQW9xd0VqMmlyQjJwQkRrY2hyQ0xNdkVJQUFwMFRrTDZNdHVIUGp4OC92TmJLcjJQMnRMdlBXMjBTTkxkbW93bTFvZ0dhbW9Nak1GY0NPQThDRURoR1FJWmYraVJTcjE5REY0Nk5mNXplZi9GV3ZFWUJKUFFTOEloVFdmUk1SQVNPcVRVK2h3QUVwZ2lvQTZFcy8yaUdYOFpmdXRIeEVhZjNQM0FBWE9ZQ0ZDSFErSG1VaEpheDU4QVJLRFhOS3dRZ01FVkFoai82MnY2T282UHhldjhESjhEMURqWktCaGt6bnBFK3d4R1lVbjE4QjRHOEJOUUppbTc0cGN2MWpJNlBlTDMvZ1FOQUZPRExGeGRPQm82QVl4VkEwU0JRa1lBTWY0Yk9UK25JMGZzdkZybkJxK2RjQUxXNVRBMmhlTU9PRzBSRk5jaXRJSkNMUURiREwzMG4vZTc0aU52N0w3Nkc5eGtCV2xxM2VJcVpYb2tJT0ZZTEZBMENLeExJYVBpTExuOStmbDZSNUtxWGlqdjJYNHgvZWZVY0JkQ01nSWhacjZVQm5IclZsRWdwQ0E0SVFDQVdnY3lHWDNyUGVlWi8vNnYrRlFOLzZ0VjdGQ0RpQmhlbkRQL2g5Mm9zV3ZHTDRZRllSb0NueVVVZzZoeitRMzAxNTMrdFplRDA2SC9OLzFORy8vQjdNM09iaWlsUGVZNUFaVGxId3dOc09PUlVkVkFzQ0l3UWtBNkx0c0RacGZyV2NXY21UKzkvNkFpWW1kdHQ3TElsQTg1cFhHS2lxQUFIQkNEZ2o0QjYrOHBoUW5kOW5tbmxlT3BmdnQ1L2NRS1VkTyt2R2YxZm9xekpnSE1jQVZZWTlDcTFsQ3NqQVVYbm9xN1lOMGNmelRuSGNWNVR6dDcvd0Fsd21YR1dQUmx3VHFQU09TUU5aalE1UExNSEF0bVQrdWJxS01mSmZ5L0ZEcVo5OVJ3RlVOTElYQ0hMZmg1Smd4NU1BbVdJVG9Da3ZzL2gvVk82MS9Hd1pZenRmaS8xWHN6czNtUERWZExJS2VIaSs4OE5VbEVCTlRvcEt3NElRT0F5QW96dGY5WXhjL1d1T2laT2svOGVMcldiWVg3dmVWcWdra2ZtQ2h2bmZXeW9XazlCL0o2ZW5pN1RnUHdhQXNrSXlPaXIzU2loTC9PNkpKZnExSjgvZjNxVW5EeUwvc3oxVXJ3dURrUVU0S05SUDdkQmxzUkJ4OGs0SGhVRlpVcEdRTzFEVGpOR2Z4Mjk0N1QzSDMvSjM3bUdmM2llbWNremNuY3dyV2FkeGxpY2grSU1zTGFBTzFHblFBMEl5T2lUeGIrdWpwR3VjVHIxTCsrMHY2R3hIM3Z2TlNGUURiUVlMMTdYYmFoeUJqVGwwcW1uM3NBY2NNc01CS1JUbEdSTVQzOWRmVExVejA1MVN1NXBmMk9HZi9pWm1ibWNGa2dVWUx1R1docnQ5ZlgxemhrZ01wREJCT1o3eG1MMDBTWGI2eEtudlg4Uy80YkdmdXk5bVgwMU0zZnA0MFFCdG0rMHhSSFFheGttVUNJVXN3bnlHY3NJVHl5NWZYaDRZRXovUzEzZElmM2h0UGZQdEw4eG8zLzRtZGVFUUR6MytnMjVPQVZpcjZFQ29nTVJUR1BjWjZDWDMwNUhGRjNodFBkUDR0K2hvWi82MzJOQ29JeFBFVEplMnpWMG9nTnhEV2h2VDBZdnY1MGVHTlBCMGcwT2UvOGsvazBaKzdIdnZDWUVLcVEzSm5oODFrNFJLRHJBMXNXOW1jNSt5NnVPQUp2dXRHdnZ4M1N0RWlyZjN0NDhDdGIxbUkzanN4TUV2SzRRaUJQZ3IvRVhwYUFlZ0ZZaVpMakFveDdzczB6RjRETS8zMis3ZDJ6OFNmdzdZZWVQZnUxNWhVQXBCYWJ3K0ZVSXhTRlFIU2xDb0NsWEdwOGxvYkJQSTF5cjFKSVBKWjVxWHI3a2hqYnV2NDA3RGZ0TFpGbng3Nmgxbi9tRm1kM1VhdnhMNzZPeEpnbGZNVGE4K2xjV3FpTk5OMVJ2VG9wZWpoeEhYZ0pxd3lWVG43YmNSL3NkNmxuSHhsK05pam4vTSszODVHbGUxd1pRRFV1QnlLQU1oWkwzZlNrU0taRXliRUNVSUs0em9ONjk2bGZEUTZwdmV2ZDl0ZE5EdmFvSWplT0lIcUgvU2F1KzRFdXZhd01VVlNraFZNandVRUQ1djE4Rkk2ZE9Sa0pEQjBRS2lxVDM4YXIycU1pT2V2WnFsNnBIZXZmOXRzVXhQZnJqeHcvUHdram9mNEY5bjNXcW1kMTVybkdWVFR0UGpRa3JuOFZSUGpnR2Zsb2hoajVPdTFxaUkzLy8vdTFIQ01kTFF1aC9sbFZmZUpMbm9ZQWlCK3AxRUZyTXA1Z09IUU9HRWtxTHVQeFZ3MnowNlBPMXFVT25RSHBWN2NyNVFlaC9vVjJmZmJyM29ZQWltQ1FIb3F5R3lrdk9nY1lybFhpb0lRV05RVXVSeWFnNUhzTXM0cnpwYXpIdUdtWVJGNFhzeFVtOENOdlRqa283VWh1U3JEZy9DUDNQdHVabm51aDVWc0JRT0NXc1VtSkZnSGxGbVUzSndLR1RvRWlTaktJY2hlSXNTS2E4T3d3cW44cXB2MUoyUFl2KzVQeGczR2tIVSsxZzdMdnYzNys3bC91OTdpZjBmNlpkWC9Rek0zc2FHbHZQNzhrTFFPR05LYlUxUGxNUFdYOXlOUFduWkRjWjJCSnBrTUV0eHZlU1YxMm5HRzlkVy9mUi9lUzBsREtzOFR4Y2c3WnlLQVBTbjUwY2hQNFhXZkVMVHQ0dkVPUStIbFFFVjBrcjVBV2czQTZWRy84akU4akF1QXgwTXQ1ZlZEeWgvd3ZzK1ZrLzlicFhRSkdJdzFlRlJCblRIRy9zS0VHNElBUElRSkdCVHNiN2h5cisyMWxHakI5ZFJzRHJYZ0ZEeVJpK2x4TkFYZ0NLcmlnNlhwRUZaT0NqREhRMDNsOVVPOXY4WG1iR0wvdTFtWFczbGl0NUFSOGJQVW9RSHNnQU10REIvUDVpOU1zcjIveGVacjR2LzNVdlV3T0x4SlJYSldXUkY0RFN3L0FoQTlsbFFFT2ptakhTMmZGWHR1ZHlDOFlWTGliUXd5cUJZOEpOWGdES1A3dnk1L2x6dHdFTmlVb1BkbmpjWFd5NHVNQjZCSHJMQnlnQ3IzblRtbHFGSXN5dENLbC82aitiRERoZno3K282TEZYcHZ5dFo3clh1Vkp2VXdNUHBZcThBQXhBTmdQQTgrYVVlUTE5YWdpMDAwUGhpcXQxckJaWFdaVkFyL2tBcFNGb2FWaW1DdVpVaWhoRDZqMkRERWkvZFJyeWw1cG0zSDlWaTczQnhYck5CeWhPQUZNRk1RUVpEQUhQbUUvT081emlWOVJ5ZVdYY2Z3T2J2Zm9sZTgwSEtGS21WNFlFOGlsSWpDSjFIbFVHT3B6aU4xVEhlbisvdXFIaWd0c1EyT2NEZExjK3dLSEVhVE1ZaGdRd0NsR05BczhWWDdhbHY5N2UzZzVWVzIvL005OS9HMU85M1ZWN3p3Y29MWVNwZ3ZHVkpJYVFPbzRvQTVyaTUzMzN5cUpuSjE1WjUzODdNNzN0bFh2YkwyQkNDSGY3cEVkVUVqd1R4ZzhaaUNjREhlM2lONlYyOVIzci9HOXJwcmU5ZXU5SmdVUHBaRmZCZUlvUzQwZWRScEtCem5ieEc2clhzZmVzODcrdGVhNXpkVE43SEt2ZEhqOWpTQUNERWNsZzhDeHg1TG5EWGZ5bVRBQkpmM1hNOC9aM2laSVVXS1NWMVFQaktFME1JSFVaUVFZNlh0V3ZxTlhoSzBsLzI1dmx1bmZZSndWMnVlajBVREtIN3pVa0VFRjU4QXdZUVdTZ1R4bFF5Rit6bFFJZEpQM1ZOYzMxN21abTEvdlZuTUxJSzBNQ2ZTcE9EQjcxMXJzTUJBdjV5eWF3MGw4OWM5em1UbVoyRzhiNjd4OUVUZ0FiQ21GUWVqY29sTDhmR1ZiSVA4QVV2ME5UY05QR0tuSFhxZ1RNN05kaHpVZjRuOVVEKzFHZ0dEdnFxa2NaNkh3am55azFUOFovVlN2YytHWVJsZ3NlazJhR0JEQXNQUm9XeXV4ZmJqdmZ5R2RNWFpiUHlQaHZiSStiM043TVhvb0VSSHFWRTNCemMwT0M0QmYvU2hYRFJ4MzFJQU5CUS81UyswOU5qQTgzYlU4ZzJ2VEFReWVHSVFHTVN3L0doVEw2bFZPRi9BTnM1SE9vR3N2L3l2aS9hbStKS0VFekFoR25CeGJwMXV2cjZ5c2JDaEVKSUJxRURDeVdnY0FoZjZsR3B2czFzN3JPYmh6ZENXQkl3RzhQaTk0dmRlTlJCZ0tIL0RIK3p1eXZpK0pFWENOZ0dBblFlNFlFTURZZWpRMWw4aU9Yd1VQK1VvT2E2My90d3VoUUNGOEVJdTBlZUdqOHkvOE1DZmhSdGhnKzZzS1REQ2prLy9iMlZsUkYxRmVNdnkrejY2czBFUmNLT216SkRBbGdlRHdaSHNyU1hoNi9mLzhlY1dHZlE5VjM2OHZhVUJxWEJDSnRJWHpZQW9iL015VFFYdkZpL0tpRGxqS1FJT1JmVk42ZFMyTkRvWHdTaUxwYVlHa041WlVoQVF4UVN3UEV2ZHZKWC9Bcy82TGk5TW9xZno3TnJPOVNaWEVDR0JKb3A0UXhnTEJ2SVFQQnMvd3gvcjVOYXorbHkrSUVxTVV3SklBeGFtR011R2M5dVVzVThxZm4zNCtaOVYzU1RFNEFRd0wxbERHR0Q5WTFaU0JSeUIvajc5dWs5bGU2VEU0QVF3SVlwcHFHaVh0dEwyK0pRdjRZLy83TWF4OGx6dVFFTUNTd3ZWTEc4TUY0YXhsSUZ2TEgrUGRoU3ZzdFpUWW5RTkVBaFE2M1ZsUmNIMk9JREt3ckE5ZlgxNmIybStnZzI3OWYwOXBQeVRNNkFiZTN0emdCYkNpRERIUWlBOGxDL3ZUOCt6R2ZNVXFhelFsUUMyT1d3TG85TkhxODhGeGJCaFR5ZjNoNFNOVHAzejBxUGY4WVpyV3ZwOGpvQkRBa2dORmEyMmh4dlhWa0ttSEluNTUvWHlZelhtbXpMQnM4N0ZMOC9mdlhHQkpZUjJsai9PQzRoZ3dvNUovd1lIbmZlQ2ExdnlmS3NJSFFtSEw1L2Z1M0tlUzRoZ0xqR2hoQ1pHQzVES2o5UFQwOWpUWFA2Sit4c1U5L3BqSnVpYlhIOUg2djZlZ043OFB6TVNTd1hHbGo2R0MyaGd4OCsvWXRXNWEvZE05ZmJkc2UxNUx3Wk4wUzJEc0JxZWJkN0ZyazM3OTJkM2RISktDVERQRTFqQS9YYU92RUpBMzVTN2RlZDJzZ0tIaDhBbWIyMWN6U09RRnlCQlFOVUc0QTZ3YTBOUTRZNTVqOEZlN1hUSnhrYy90THhGRTY5V3Q4QzhJVGRrOGdzeE5RV3F1bUlpbEVpVEdLYVl5bzF6cjFLcU92ZHZUeThsS2FWc2JYTjR4LzkyWXgxd09ZMlpXWnBjek9HV29vOVZad0J1b1lDNHh5SE00eSt2ZjM5NllaTjhrUGVUNVh1YXdIVHh1R2dKbmRKMi9BL3g0Zlp5Q09nY0xaV0xjdVMwOWZ6akpHLzUvS3VBOWpDSGlRdkFReUxoajByd2tmZVNNbHArbEw1QXlzYTBnd3pQM3dWSzZNa21jVjNzZm9mMUlVck82WDEyVEdlM0l6dThrNFRmQlRzejd5d2V2cjZ5N2tTZDVBUHdZTVoyTlpYWlZldmtMN1NSUDVqclQrRHg5cnpJTTUvdkZNSUU5RXNPVXNtd0FBQndGSlJFRlVjdUNIaGo3NWozcEZ2Mzc5SXBHUXFZWGRKcElPRFg3eUpMN0p0ajc0a21sK21NbllCSEFDQnMxOXdWc3BVUFdjRkNHUVlxWDN1YXozQ2EvdGVVa3ViMjV1ZG5LS3dWL1F1UDgvbFV6LzJLYVBweHNTSURsd3NZTDQ4QU1OR1NoaFNtT28yZ1FGQTdlOWdZUHhPMk1aZThtZDVFOXlTRWovUS9OYytzOGptZjVENjhEN0ZBUklEbHlxSjZiUEwxRUNKUmJpRkx3Ykt3ejNaU3dPamIyY1Q0N1ZDTENoVHdwcngwT09FdEM2MWxsWERseE5oVXhjU01wYXN3M1VVOVB3QVk3QlpjWXd1ak9oekh5RjhlblpUelNxZGI1aVRmOVJpOENINlFpUUY3Q09ScGw3RlUyNVVyUkFqb0VTRGFYd2NRenlPQWFsUjY5SWtlcGZJWHc1aWt6Rm05dUNMajZQOGY1MFZvNEhQa21BdklDTEZjdkZGNUFoS0VNSjZnVVc1MEJHSTNydk45THpEWTE4NmMzTDRXT3MvdUltY3VrRnREQWFLL3VkdEFhY2tKS0FtZDJ4WHNDbE9tYWIzNnVIT0hRUVN2UkFRd3RzZ0ZRdmdpRGpMdDdpUHV6RkZ3TlBUMzRiK2Ivd3FncjVNOTZmMHFyeDBJc0lNQ1J3b2FwcCtQT2hreUNEcEttTGNoUmtxQlJOS000Q0VZV1BEb01NK3RDb0Y4TXVmZ3JSS3lxajNqdkd2YUZ3bjM5cmR2SmJaQUU0T1QyQi9XWkNtaDdERVppQURKb01td3hjeVV1UXdTdU9RM0VlaGc2RW5JamlTQlREV2R1aEtMM3djbi9sVUpSeXFhemxUK1hYWHpIa2NvcjBuSXFrWU5BREMvYjdveEh5VDIvTkFIQTJBWVlFM2pVSjc1WVRrSkc5OUcvNVhma0ZCSXlRLzlsYW54OUNZRUNBSVFIVUtRUWcwQkVCc3Z3SCtwdTNFRmlGQUFzSGRhUUNLU29FY2hKZ0M5OVZ0RDBYZ2NBSUFSWU95cWxWZVdvSU9DZWdSTDl2SXlxTGp5QUFnVFVKN0ljRVNCQjByaEVwSGdTU0VIaGlidithR3A1clFXQUdBZTJielRMQ1NWUXNqd2tCZndTVTZIY3pRMVZ4Q2dRZ3NBVUJvZ0grdENJbGdrQUNBaS9TUFZ2b05LNEpBUWdzSkVBMElJSEs1UkVoMEo0QTAvc1c2bVpPaDBBVkFrUUQybXRIU2dDQndBVG85VmZSNU53RUFoY1FJQm9RV0FYemFCQ29UNEN4L2d2ME1UK0ZRSFVDUkFQcWEwbnVDSUdBQkZqS3Q3cjI1b1lRV0ltQW1WMHpVeUNnV3VhUklMQXRBZWIxcjZTRHVRd0VtaE5nRmNGdHRTVlhoMEFRQWdyMy8ycXVzQ2dBQkNDd0xnR0dCWUtvYUI0REF0c1FJTWx2WFpYTDFTRGdqd0JKZ3R0b1Q2NEtnVTRKRU83M3A2WXBFUVMySmJBZkZsRGo1NEFBQlBJUklOeS9yWXJsNmhEd1RZQmhnWHhhbnllR2dKbVIzZTliTlZNNkNOUWpzSGNFTkFiSUFRRUl4Q1dnTnM2dWZmVlVLM2VDUUQ4RXlBK0lxL2w1c3RRRTNqRDgvZWhoU2dxQnBnUndCRkliQ3g0K0RnR044OTgyVlNiY0hBSVE2Sk1BamtBY1M4Q1RwQ0t3Uy9BenM2cytOUStsaGdBRVhCRFk1d2Y4WWtYQlZBYUVoKzJUQUliZmhkYWtFQkFJUmdCSG9FK0xRS2xURU1Ed0I5TzNQQTRFWEJMQUVVaGhVSGpJUGdoZytGMXFTUW9GZ2VBRWNBVDZzQkNVTWlRQkRIOXcvY3JqUWFBTEFudEg0SlljZ1pDR2hvZnlSUUREMzRWV3BKQVFTRWlBV1FPK3JBV2xDVU5BUzNiZmtkV2ZVS255eUJEb2pjRGVFV0Jsd1REMmh3ZHBSSUNWKzNwVGZwUVhBaEQ0bjRDWlhadlpZeVBseVcwaDBDdUJKMWJ1UTR0Q0FBSWhDT3p6Qk9RSXNQdGdyeWFKY205TmdQSDlFTnFPaDRBQUJJNFNZSGhnYXp2QzlUc2pvREMva21oWnRlK28xdUFMQ0VBZ0ZJRkJWRUE5SHc0SVpDSWdtZGVXdk96TUYwcXI4VEFRZ01BaUF1cjVFQlhJWlB0U1A2dDYrMlR6TDlJUW5Bd0JDS1FnTUlnS2tDdVEyazZHZXZneXRuK2RvaEh6a0JDQUFBUXVKV0JtTjh3Z0NHVUlNejJNakQ2Wi9KY3FBWDRQQVFqa0pzQVFRU2E3MmYyekV1TFByYTU0ZWdoQVlDc0NnMldIcFdnNUlPQ0JBRVovcXdiUGRTRUFBUWlNRWNBWjhHRDcwcFlCb3ovV0tQa01BaENBUUcwQ0EyZEE0NjVNSzB4cmx6ZDdjTW1VakQ3ejlXczNidTRIQVFoQVlBa0J6YS9lSnhBeW0yQXpteGord3BLZDNWeDlGdWxaMHZvNEZ3SVFnSUFUQXZ2OUNEVDNtcnlCOERiN29nY3N2WHpKQ2xQMm5MUmZpZ0VCQ0VCZ05RTDc2SUI2ZHE4WG1RdCtISUdBWklCZS9tcXRpd3RCQUFJUTZJVEFmb3FoMWh2QUlZaGd6azgvUXpINHFuUFczdStrblZKTUNFQUFBcHNUMkRzRXloLzR0Ujh5SUtId3RGSDFla1lKNmRQRDM3emxjQU1JUUFBQ0FRbnNjd2lVL2EzdGpCazI4R3J1LzYrYmgvMWErNHpoQjJ5TFBCSUVJQUNCNWdUMmVRUktGbFB2VXNtRlJBcnFPUVppTFVmc243RW5uTis4U1ZBQUNFQUFBbmtKN0NNRkdsdlc4SUhXSXlCYWNKbFRjR2pveGZaclhnbmp5U0VBQVFoQW9Dc0NlOGRBZVFVbFlsQ2NBNklHLzBkT05OOWVUQlJORVNNTWZWY1NUbUVoQUFFSVFHQXhnVUhTb1l5ZWpGK0pIbWhZUVJHRW5wMEVsVjNHWGMraWNQM1F3RjhUdGw4c0x2d0FBaENBQUFTeUVkZ3ZkU3lqcVVpQ25BVWxKY3BaMEorTXEvNWthTXVmbkFjWjMvSzNKQmhmREhmNWJUSGl1clo2NnVWKzVmNHFpLzVVTnBXUk1IMDJBZVY1dXlUd0g1cy9MOWtHcVBIaUFBQUFBRWxGVGtTdVFtQ0MiLz4KPC9kZWZzPgo8L3N2Zz4K',
    adapter: () =>
        new SolletWalletAdapter({
            provider: 'https://wallet.aldrin.com',
            ...config,
        }),
});
