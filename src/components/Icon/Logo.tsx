import { SVGProps } from 'react';

function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={100}
      height={24}
      viewBox="0 0 100 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.695 2.81c.328.312.743.467 1.246.467s.918-.155 1.245-.466c.328-.311.491-.702.491-1.172s-.163-.862-.49-1.173C16.858.156 16.443 0 15.94 0s-.918.155-1.246.466c-.327.311-.49.702-.49 1.173 0 .47.163.861.49 1.172zM3.12 17.774c.973.454 2.105.68 3.397.68 1.325 0 2.44-.239 3.346-.718.906-.479 1.585-1.1 2.038-1.865.453-.765.68-1.593.68-2.483 0-1.009-.206-1.84-.617-2.496a4.743 4.743 0 00-1.648-1.588 11.994 11.994 0 00-2.34-1.034l-2.415-.845c-.705-.243-1.258-.55-1.661-.92s-.604-.899-.604-1.588c0-.773.273-1.378.818-1.815.545-.437 1.237-.647 2.076-.63.654 0 1.208.134 1.66.403a2.8 2.8 0 011.032 1.021c.235.412.352.844.352 1.298h2.818c-.016-.991-.268-1.861-.754-2.609-.487-.748-1.162-1.332-2.026-1.752-.864-.42-1.866-.63-3.007-.63-1.157 0-2.168.206-3.032.617-.864.412-1.535.988-2.013 1.727-.478.74-.708 1.605-.692 2.597 0 1.176.34 2.126 1.02 2.849.679.722 1.698 1.31 3.057 1.764.343.118.679.231 1.006.34l.956.316c.62.201 1.17.428 1.648.68.478.252.856.572 1.133.958.276.387.415.891.415 1.513 0 .773-.29 1.408-.868 1.903-.58.496-1.38.744-2.403.744-1.158 0-2.055-.328-2.693-.983-.637-.656-.964-1.454-.98-2.395H0c.017 1.16.298 2.16.843 3 .545.84 1.304 1.487 2.277 1.941zm11.487.378V5.647h2.667v12.504h-2.667zM19.83 5.647v12.504h2.667v-6.454c0-1.31.323-2.319.97-3.025.645-.706 1.463-1.059 2.452-1.059 1.98 0 2.97 1.21 2.97 3.63v6.908h2.641v-7.185c0-1.865-.431-3.269-1.295-4.21-.864-.94-2.051-1.411-3.56-1.411-.974 0-1.833.222-2.58.668a4.35 4.35 0 00-1.698 1.827l-.201-2.193h-2.366zm18.986 8.672a6.855 6.855 0 01-1.812-.227l-1.082 1.06c.185.117.411.218.68.302.268.084.645.16 1.132.227l.398.05c.43.05.96.1 1.59.151 1.66.152 2.86.55 3.598 1.198.738.647 1.107 1.508 1.107 2.584 0 .74-.197 1.441-.592 2.105-.394.664-1.006 1.202-1.836 1.613-.83.412-1.892.618-3.183.618-1.745 0-3.158-.332-4.24-.996-1.082-.664-1.623-1.668-1.623-3.012 0-.521.138-1.038.415-1.55.277-.513.717-.997 1.321-1.45a5.498 5.498 0 01-1.61-1.034v-.605l2.164-2.219c-.973-.84-1.46-1.94-1.46-3.302 0-.824.198-1.576.592-2.256.394-.681.968-1.223 1.723-1.626.755-.404 1.66-.605 2.718-.605.704 0 1.358.1 1.962.302h4.655v1.765l-2.214.126c.403.689.604 1.454.604 2.294 0 .84-.197 1.597-.591 2.269-.395.672-.965 1.21-1.711 1.613-.747.404-1.649.605-2.705.605zm1.874-2.71c-.478.412-1.103.618-1.874.618-.789 0-1.422-.206-1.9-.618-.478-.412-.717-.996-.717-1.752 0-.773.239-1.361.717-1.765.478-.403 1.111-.605 1.9-.605.771 0 1.396.202 1.874.605.478.404.717.992.717 1.765 0 .756-.239 1.34-.717 1.752zm-5.22 8.13c0 .723.318 1.265.955 1.627.638.36 1.435.542 2.39.542.923 0 1.67-.198 2.24-.593.57-.395.856-.92.856-1.576 0-.487-.193-.903-.58-1.247-.385-.345-1.115-.56-2.188-.643a22.05 22.05 0 01-2.139-.227c-.587.32-.99.664-1.208 1.034-.218.37-.327.73-.327 1.084zM46.854 0v18.151h2.667V0h-2.667zm10.908 18.454c-1.224 0-2.31-.273-3.258-.82a5.82 5.82 0 01-2.227-2.281c-.537-.975-.805-2.11-.805-3.403 0-1.311.264-2.463.793-3.454a5.778 5.778 0 012.214-2.32c.948-.554 2.05-.831 3.309-.831 1.224 0 2.29.273 3.195.819a5.788 5.788 0 012.114 2.18c.503.908.754 1.908.754 3l-.005.354-.007.189-.038.642H54.09c.084 1.21.482 2.13 1.195 2.76.713.631 1.539.946 2.478.946.755 0 1.388-.172 1.9-.516a3.13 3.13 0 001.145-1.4h2.667c-.336 1.177-1.002 2.16-2 2.95s-2.236 1.185-3.712 1.185zM55.398 8.332a3.772 3.772 0 012.365-.794c.956 0 1.753.286 2.39.857.638.571.982 1.344 1.032 2.32H54.14c.151-1.06.57-1.854 1.258-2.383zm15.161 9.82c-1.225 0-2.197-.3-2.919-.896-.721-.596-1.082-1.66-1.082-3.189V7.891H64.42V5.647h2.14l.326-3.176h2.34v3.176h3.523v2.244h-3.523v6.176c0 .69.147 1.164.44 1.425.294.26.802.39 1.523.39h1.434v2.27H70.56zm6.266-.518c.948.547 2.017.82 3.208.82 1.191 0 2.265-.273 3.221-.82a6.037 6.037 0 002.277-2.294c.562-.983.843-2.13.843-3.44 0-1.312-.281-2.459-.843-3.442a6.064 6.064 0 00-2.264-2.294c-.948-.546-2.018-.82-3.209-.82-1.174 0-2.239.274-3.195.82a6.037 6.037 0 00-2.277 2.294c-.562.983-.843 2.13-.843 3.441s.277 2.458.83 3.441a5.975 5.975 0 002.252 2.294zm3.208-1.474c.638 0 1.229-.16 1.774-.48.545-.319.986-.793 1.321-1.424.336-.63.503-1.416.503-2.357 0-.941-.163-1.727-.49-2.357-.327-.63-.764-1.105-1.309-1.424a3.448 3.448 0 00-1.773-.48c-.638 0-1.23.16-1.774.48-.546.319-.986.794-1.321 1.424-.336.63-.504 1.416-.504 2.357 0 .941.168 1.727.504 2.357.335.63.771 1.105 1.308 1.425.537.319 1.124.479 1.761.479zM90.665 5.647H88.3v12.504h2.667v-6.454c0-1.31.323-2.319.969-3.025.645-.706 1.463-1.059 2.453-1.059 1.98 0 2.969 1.21 2.969 3.63v6.908H100v-7.185c0-1.865-.432-3.269-1.296-4.21-.864-.94-2.05-1.411-3.56-1.411-.973 0-1.833.222-2.58.668a4.35 4.35 0 00-1.698 1.827l-.201-2.193z"
      />
    </svg>
  );
}

export default Logo;
