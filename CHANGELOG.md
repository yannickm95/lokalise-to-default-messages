# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.4.4](https://github.com/yannickm95/lokalise-to-default-messages/compare/lokalise-to-default-messages-v3.0.0...lokalise-to-default-messages-v2.4.4) (2023-12-04)


### ⚠ BREAKING CHANGES

* drop support for node 17 and lower, 18 or higher only is now supported
* Package is ESM now
* trigger release v1.0.0
* add new workflow system
* overhaul ci wofkflow
* drop standard-version package
* support --old-translation-file argument

### refactor

* convert package from CJS to ESM ([51f1522](https://github.com/yannickm95/lokalise-to-default-messages/commit/51f152207d9b5380063f5b054905f804ccab804f))


### ci

* add new workflow system ([430f77d](https://github.com/yannickm95/lokalise-to-default-messages/commit/430f77d096dc51d6e4e2982026331871b17c5077))
* overhaul ci wofkflow ([470ef2c](https://github.com/yannickm95/lokalise-to-default-messages/commit/470ef2cd3a5abdf3d7649b0bdc5d63023b630869))


### Features

* **build:** upgrade yarn to v3 ([af31339](https://github.com/yannickm95/lokalise-to-default-messages/commit/af313398ba7d1651fce9694cf9c88b652b3092e3))
* restructure files and expose main entry in package.json ([80233bf](https://github.com/yannickm95/lokalise-to-default-messages/commit/80233bfb8c9a195791c73b2544489f85a9fc33c1))
* support --old-translation-file argument ([254ef77](https://github.com/yannickm95/lokalise-to-default-messages/commit/254ef7702f8c3ae278fd5419fb82cbd0b30db772))
* support old translation file diff ([8dd2d2d](https://github.com/yannickm95/lokalise-to-default-messages/commit/8dd2d2d4fdeec5f8ffb7dc6faae7031e40eeeeaa))
* trigger release v1.0.0 ([0833709](https://github.com/yannickm95/lokalise-to-default-messages/commit/0833709a639ea74498768bbf99a298c09b87ca1b))
* upgrade internal packages ([7d08cd2](https://github.com/yannickm95/lokalise-to-default-messages/commit/7d08cd2ac2a5784d544c63b615149a80277c6431))


### Bug Fixes

* add --no-verify to release script ([8f44514](https://github.com/yannickm95/lokalise-to-default-messages/commit/8f4451418060312f219a54419284185822b0a6da))
* add automatic release merge ([26c2ed0](https://github.com/yannickm95/lokalise-to-default-messages/commit/26c2ed0b9bd7a5f87d6d0e9895d70c68c3ef06c8))
* better error logging ([8b05b85](https://github.com/yannickm95/lokalise-to-default-messages/commit/8b05b85029f982a9d48bb50779f4155c40ce41dc))
* better error logging ([f30ce2f](https://github.com/yannickm95/lokalise-to-default-messages/commit/f30ce2f634ee090c2215891b3b97ed97625cd03b))
* better error logging ([1639a58](https://github.com/yannickm95/lokalise-to-default-messages/commit/1639a583445a2a9ee3ea47de5376fec1093e6447))
* better error logging ([7a8cd06](https://github.com/yannickm95/lokalise-to-default-messages/commit/7a8cd06dbcae8cd75eb6a9827591cfa6ac70074f))
* better error logging ([09f2947](https://github.com/yannickm95/lokalise-to-default-messages/commit/09f29477e3f3e2a16978915a52832fabf53c9401))
* better naming ([2a311a2](https://github.com/yannickm95/lokalise-to-default-messages/commit/2a311a2acbf33abacc3fef5058b848861e58fc49))
* better naming for diff ([c9cdde5](https://github.com/yannickm95/lokalise-to-default-messages/commit/c9cdde510e780215f12774c17f4c65e101510aa8))
* better progressbar naming ([dfb930c](https://github.com/yannickm95/lokalise-to-default-messages/commit/dfb930c859137f9c888245813361f0e2f6327ef7))
* ci disable prepare script ([0845f1d](https://github.com/yannickm95/lokalise-to-default-messages/commit/0845f1d8f64f85a89459cb1ff46f137575aa2d36))
* ci some more(test) ([81d083b](https://github.com/yannickm95/lokalise-to-default-messages/commit/81d083b7249440bd153dc81d052d4783c0f2310f))
* ci some more(test2) ([81451cc](https://github.com/yannickm95/lokalise-to-default-messages/commit/81451cc0943a00d4fd5f5eb50134af0a97a8121a))
* cleanup changelog ([9056b9f](https://github.com/yannickm95/lokalise-to-default-messages/commit/9056b9f20157390ccb58fdbece6e84e0aae1332e))
* defaultMessage format string type according to content ([ceadbc5](https://github.com/yannickm95/lokalise-to-default-messages/commit/ceadbc5d92a4d6700e7b8da4017e07c5537cdc97))
* drop support for github packages in ci ([986dc9f](https://github.com/yannickm95/lokalise-to-default-messages/commit/986dc9f2208d1eee47cfa420322dad3d8e5a3364))
* export function in index so it's available in bin ([4d95546](https://github.com/yannickm95/lokalise-to-default-messages/commit/4d95546a83268e79e41138613b4c8b2bb51fa5c0))
* fix automerge ci workflow ([8d7f33c](https://github.com/yannickm95/lokalise-to-default-messages/commit/8d7f33c89ecc04776e0a1a4562cecd79ae7c7404))
* fix cli argument path generation ([3c52a4b](https://github.com/yannickm95/lokalise-to-default-messages/commit/3c52a4b8cf2606277bc660618b24d425bc38a7a2))
* fix final ci problems ([2733654](https://github.com/yannickm95/lokalise-to-default-messages/commit/2733654e41476962ac3301205a964d1cd2fc90ac))
* fix release-please ci ([9a5310f](https://github.com/yannickm95/lokalise-to-default-messages/commit/9a5310f31f28a7e25b54460ba38e85a602c7ea19))
* fix release-please ci v2 ([c245457](https://github.com/yannickm95/lokalise-to-default-messages/commit/c245457542a1a00354345595b050f0e678742ff8))
* fix release-please ci v3 ([67a275c](https://github.com/yannickm95/lokalise-to-default-messages/commit/67a275cadd85d9408644c3c8c992bf306be55d1a))
* fix release-please ci v4 ([f7940a2](https://github.com/yannickm95/lokalise-to-default-messages/commit/f7940a2a68165fd56cd7be5a184191a0e9ef4631))
* fix release-please ci v5 ([56e6b95](https://github.com/yannickm95/lokalise-to-default-messages/commit/56e6b95f6d379b178842013f321115e14d752559))
* generate release properly ([52e40a3](https://github.com/yannickm95/lokalise-to-default-messages/commit/52e40a35f12eca4977435222da0382347f5d62c1))
* make husky install optional ([9220bd3](https://github.com/yannickm95/lokalise-to-default-messages/commit/9220bd34f77d4f12e2d1aa531b992243ac6d3aca))
* npm publish ci ([060be04](https://github.com/yannickm95/lokalise-to-default-messages/commit/060be0430abeabe72318ba6fb5e42fdbb28e155a))
* only run ci on main and release branches ([726d669](https://github.com/yannickm95/lokalise-to-default-messages/commit/726d6698bb4bbcf2c29152986cacb5a0010bc0de))
* package.json adjust author ([0d1ebf6](https://github.com/yannickm95/lokalise-to-default-messages/commit/0d1ebf64ae35f663f13a1a4359d57d32b16a794a))
* pass otp properly in publish ([150705d](https://github.com/yannickm95/lokalise-to-default-messages/commit/150705dcd90e34d33b0e9d6afb3a033f35fdd470))
* pass otp to publish command ([e1011d6](https://github.com/yannickm95/lokalise-to-default-messages/commit/e1011d67e1eb486838afdfa1fd564e37b7fc1b2a))
* properly configure husk with Yarn 2+ ([3473017](https://github.com/yannickm95/lokalise-to-default-messages/commit/347301722030de369fa013f629134385e81315e4))
* properly setup workflows ([92aa65e](https://github.com/yannickm95/lokalise-to-default-messages/commit/92aa65e1420ed36abfaf9dcfd60327a3b36d86fe))
* release output in git is correctly dipslayed ([812b3b0](https://github.com/yannickm95/lokalise-to-default-messages/commit/812b3b008bc2650595f23b30e6daa3e07d7c90a1))
* remove postinstall script ([1e4af7e](https://github.com/yannickm95/lokalise-to-default-messages/commit/1e4af7ed53d40c07abce27f562635c0d033b0c4d))
* trigger release ([c7bb838](https://github.com/yannickm95/lokalise-to-default-messages/commit/c7bb838494f731df215971afb380e18e8c55393b))
* update ci release.ymll ([69039fd](https://github.com/yannickm95/lokalise-to-default-messages/commit/69039fd371d63257affeba22dffb974b5ca0ee62))
* update some namings ([#84](https://github.com/yannickm95/lokalise-to-default-messages/issues/84)) ([e8fce16](https://github.com/yannickm95/lokalise-to-default-messages/commit/e8fce16db0df51bb4eb2354746af7c659617fa93))
* use better variable naming for translation ([6298ace](https://github.com/yannickm95/lokalise-to-default-messages/commit/6298aceab330daf120c5ff1ea4929afbe5db37e7))
* use better variable naming for translation ([4195f52](https://github.com/yannickm95/lokalise-to-default-messages/commit/4195f5288a1a448496221617beebc2ef47d0c97a))
* use better variable naming for translation ([17989b1](https://github.com/yannickm95/lokalise-to-default-messages/commit/17989b1ad0e96d1672f394db1e129c653ad74213))
* use prepare instead of postinstall for husky ([b06c7d3](https://github.com/yannickm95/lokalise-to-default-messages/commit/b06c7d307aa28a2ffb2ffaeb1e4df605926d461a))
* workflow ci ([ec747e8](https://github.com/yannickm95/lokalise-to-default-messages/commit/ec747e8d14f69a2fcad5466252340fb1549bb703))


### Dependencies

* add standard-version ([a6691f0](https://github.com/yannickm95/lokalise-to-default-messages/commit/a6691f0fb7101870099a77eb8fc277fa460f8a1c))
* adjust changelog types ([527ecdc](https://github.com/yannickm95/lokalise-to-default-messages/commit/527ecdc2c208890b4fb822948a2115a34a49a797))
* cache and install yarn deps when releasing ([0c32057](https://github.com/yannickm95/lokalise-to-default-messages/commit/0c32057f4a2833cf44438da8211534c0a6c77c21))
* change automated release worfklow ([719829d](https://github.com/yannickm95/lokalise-to-default-messages/commit/719829d026e1a5fa49fb8441c2712a5608853b85))
* **chore:** update yarn version ([b9cc09a](https://github.com/yannickm95/lokalise-to-default-messages/commit/b9cc09a832536477cb86912c462fb70e97f7fdfa))
* **ci-deps:** bump actions/checkout from 3 to 4 ([#372](https://github.com/yannickm95/lokalise-to-default-messages/issues/372)) ([cdec1f4](https://github.com/yannickm95/lokalise-to-default-messages/commit/cdec1f473a3d1a240f20c9b136bfd770124c46cd))
* **ci-deps:** bump actions/setup-node from 3 to 4 ([#394](https://github.com/yannickm95/lokalise-to-default-messages/issues/394)) ([854e7cd](https://github.com/yannickm95/lokalise-to-default-messages/commit/854e7cdb82b79ba00e187f30b9500bc2ff0f7437))
* **ci-deps:** bump google-github-actions/release-please-action ([#424](https://github.com/yannickm95/lokalise-to-default-messages/issues/424)) ([a9700fb](https://github.com/yannickm95/lokalise-to-default-messages/commit/a9700fb9c399da56ec30a5757ec1834c324d9d30))
* **ci-deps:** dont use manifest-file ([ea32c5f](https://github.com/yannickm95/lokalise-to-default-messages/commit/ea32c5f060ea5057e5d1ecbc8976def2111a84be))
* **ci-deps:** update release-please config file ([22adfef](https://github.com/yannickm95/lokalise-to-default-messages/commit/22adfef23f4addf852788f36a354943edbfb565e))
* **ci-deps:** use default v4 behaviour ([0a2a4dd](https://github.com/yannickm95/lokalise-to-default-messages/commit/0a2a4ddc009f51e45ed8f40d4bb110e5ca2ecd7e))
* **deps:** bump [@commitlint](https://github.com/commitlint) packages to 17.6.1 ([c5cac2e](https://github.com/yannickm95/lokalise-to-default-messages/commit/c5cac2e8df0966d24b661d95745f859a6191aa51))
* **deps:** bump @commitlint/cli and @commitlint/config-conventional from 17.2.0 to 17.3.0 + update underlying deps ([#238](https://github.com/yannickm95/lokalise-to-default-messages/issues/238)) ([5addee2](https://github.com/yannickm95/lokalise-to-default-messages/commit/5addee2819c0f5e570d83ebb3820c3353ce29b15))
* **deps:** bump @commitlint/cli from 17.0.0 to 17.0.1 ([#201](https://github.com/yannickm95/lokalise-to-default-messages/issues/201)) ([4b10cf5](https://github.com/yannickm95/lokalise-to-default-messages/commit/4b10cf54e029af6397adf0a8217fba7572ee1584))
* **deps:** bump @commitlint/cli from 17.1.2 to 17.2.0 ([#232](https://github.com/yannickm95/lokalise-to-default-messages/issues/232)) ([128bbc5](https://github.com/yannickm95/lokalise-to-default-messages/commit/128bbc5dc959a492c2acc0dd9cd3d031dfac3067))
* **deps:** bump @commitlint/cli from 17.4.0 to 17.4.1 ([#262](https://github.com/yannickm95/lokalise-to-default-messages/issues/262)) ([c995a92](https://github.com/yannickm95/lokalise-to-default-messages/commit/c995a9216d0b81d2f19be36b4de16c6b7f7c5668))
* **deps:** bump @commitlint/cli from 17.4.1 to 17.4.2 ([#265](https://github.com/yannickm95/lokalise-to-default-messages/issues/265)) ([9dfb47b](https://github.com/yannickm95/lokalise-to-default-messages/commit/9dfb47b361e2ca2b3622363265596876f03aef6a))
* **deps:** bump @commitlint/cli from 17.4.4 to 17.5.0 ([7be238a](https://github.com/yannickm95/lokalise-to-default-messages/commit/7be238acfc3adef3a77e48a3cec9fa155fd5ccbf))
* **deps:** bump @commitlint/cli from 17.5.0 to 17.5.1 ([#299](https://github.com/yannickm95/lokalise-to-default-messages/issues/299)) ([7ceeba6](https://github.com/yannickm95/lokalise-to-default-messages/commit/7ceeba6ce9d0340954a7e7640360ce67fd501793))
* **deps:** bump @commitlint/cli from 17.6.5 to 17.6.6 ([#341](https://github.com/yannickm95/lokalise-to-default-messages/issues/341)) ([0a96342](https://github.com/yannickm95/lokalise-to-default-messages/commit/0a963424374db0c8f26df83e4248d35652c84b10))
* **deps:** bump @commitlint/cli from 17.7.1 to 17.7.2 ([#378](https://github.com/yannickm95/lokalise-to-default-messages/issues/378)) ([ba10759](https://github.com/yannickm95/lokalise-to-default-messages/commit/ba1075990b7351d253d22ea07549adf9a2aa5392))
* **deps:** bump @commitlint/cli from 17.7.2 to 17.8.0 ([#382](https://github.com/yannickm95/lokalise-to-default-messages/issues/382)) ([3acffee](https://github.com/yannickm95/lokalise-to-default-messages/commit/3acffee32836f8fc7b59568bbc4d90c51d32748e))
* **deps:** bump @commitlint/cli from 17.8.0 to 18.0.0 ([#390](https://github.com/yannickm95/lokalise-to-default-messages/issues/390)) ([5492a48](https://github.com/yannickm95/lokalise-to-default-messages/commit/5492a48028a718dcbf7750069258e5d0ff438baf))
* **deps:** bump @commitlint/cli from 18.0.0 to 18.1.0 ([#396](https://github.com/yannickm95/lokalise-to-default-messages/issues/396)) ([c580a5c](https://github.com/yannickm95/lokalise-to-default-messages/commit/c580a5cc722d03b54009a458706392a8ba417c55))
* **deps:** bump @commitlint/cli from 18.1.0 to 18.2.0 ([#400](https://github.com/yannickm95/lokalise-to-default-messages/issues/400)) ([b421029](https://github.com/yannickm95/lokalise-to-default-messages/commit/b4210293c69519fec5224b595c392e52f35922a6))
* **deps:** bump @commitlint/cli from 18.4.1 to 18.4.2 ([#412](https://github.com/yannickm95/lokalise-to-default-messages/issues/412)) ([8fa7d2a](https://github.com/yannickm95/lokalise-to-default-messages/commit/8fa7d2a8b8e6cc22d7f49231aa87f84966c37893))
* **deps:** bump @commitlint/cli from 18.4.2 to 18.4.3 ([#419](https://github.com/yannickm95/lokalise-to-default-messages/issues/419)) ([be15963](https://github.com/yannickm95/lokalise-to-default-messages/commit/be15963c4ca5d9a6146253331951f529ed6de42b))
* **deps:** bump @commitlint/config-conventional from 17.1.0 to 17.2.0 ([#233](https://github.com/yannickm95/lokalise-to-default-messages/issues/233)) ([76775f8](https://github.com/yannickm95/lokalise-to-default-messages/commit/76775f8f82d210a7028d0c8eec10db8f36b7909c))
* **deps:** bump @commitlint/config-conventional from 17.4.0 to 17.4.2 ([#264](https://github.com/yannickm95/lokalise-to-default-messages/issues/264)) ([03edac6](https://github.com/yannickm95/lokalise-to-default-messages/commit/03edac6e2ef4610b2f0998aa2e95a8600adffa57))
* **deps:** bump @commitlint/config-conventional from 17.6.5 to 17.6.6 ([#340](https://github.com/yannickm95/lokalise-to-default-messages/issues/340)) ([9851156](https://github.com/yannickm95/lokalise-to-default-messages/commit/98511561dd97e55c2fd0a9c84d3b57a5cd56dfe8))
* **deps:** bump @commitlint/config-conventional from 17.7.0 to 17.8.0 ([#383](https://github.com/yannickm95/lokalise-to-default-messages/issues/383)) ([20b850a](https://github.com/yannickm95/lokalise-to-default-messages/commit/20b850abd618da08e7acc755edd9a63c5e705263))
* **deps:** bump @commitlint/config-conventional from 17.8.0 to 18.0.0 ([#389](https://github.com/yannickm95/lokalise-to-default-messages/issues/389)) ([d61f093](https://github.com/yannickm95/lokalise-to-default-messages/commit/d61f093802f7f1774149e96ea47ce2b28fa361bc))
* **deps:** bump @commitlint/config-conventional from 18.0.0 to 18.1.0 ([#397](https://github.com/yannickm95/lokalise-to-default-messages/issues/397)) ([66e49bc](https://github.com/yannickm95/lokalise-to-default-messages/commit/66e49bc075f5f61be33cb1bc818451a9b3d3140d))
* **deps:** bump @commitlint/config-conventional from 18.4.0 to 18.4.2 ([#411](https://github.com/yannickm95/lokalise-to-default-messages/issues/411)) ([c525ee8](https://github.com/yannickm95/lokalise-to-default-messages/commit/c525ee857510bf5ec406ed305a0f6a2d904c080c))
* **deps:** bump @commitlint/config-conventional from 18.4.2 to 18.4.3 ([#418](https://github.com/yannickm95/lokalise-to-default-messages/issues/418)) ([a33716f](https://github.com/yannickm95/lokalise-to-default-messages/commit/a33716f2817b0105b7b2dd51f158d10a5abaadb6))
* **deps:** bump `@commitlint/packages` from 17.6.6 to 17.6.7 ([71b4cbe](https://github.com/yannickm95/lokalise-to-default-messages/commit/71b4cbeeb7602a7414731f32c3c0e65b15f33c69))
* **deps:** bump deps and package manager ([92008f4](https://github.com/yannickm95/lokalise-to-default-messages/commit/92008f4e7f8c1d6a96464d15a05ce37a6f0cd74e))
* **deps:** bump eslint and prettier ([6477e4a](https://github.com/yannickm95/lokalise-to-default-messages/commit/6477e4ab97093aec3a28e56fb8aa4ded782752e9))
* **deps:** bump eslint from 8.15.0 to 8.16.0 ([#199](https://github.com/yannickm95/lokalise-to-default-messages/issues/199)) ([3670efb](https://github.com/yannickm95/lokalise-to-default-messages/commit/3670efbc2790947ba6edbdb83d58dff8632d1dee))
* **deps:** bump eslint from 8.16.0 to 8.17.0 ([#209](https://github.com/yannickm95/lokalise-to-default-messages/issues/209)) ([a42869f](https://github.com/yannickm95/lokalise-to-default-messages/commit/a42869f8e2cc88afa1e93c0ef26affaad21ac5cb))
* **deps:** bump eslint from 8.17.0 to 8.18.0 ([#214](https://github.com/yannickm95/lokalise-to-default-messages/issues/214)) ([6fe2953](https://github.com/yannickm95/lokalise-to-default-messages/commit/6fe29538baae6073ea569b31c15d65b15ea6f425))
* **deps:** bump eslint from 8.18.0 to 8.19.0 ([#219](https://github.com/yannickm95/lokalise-to-default-messages/issues/219)) ([794f9ef](https://github.com/yannickm95/lokalise-to-default-messages/commit/794f9ef9129c118e48195d85c8b960055e6014e8))
* **deps:** bump eslint from 8.19.0 to 8.20.0 ([#220](https://github.com/yannickm95/lokalise-to-default-messages/issues/220)) ([ed7af65](https://github.com/yannickm95/lokalise-to-default-messages/commit/ed7af657e017bddca6c4e65428f6cabff053f914))
* **deps:** bump eslint from 8.21.0 to 8.22.0 ([#223](https://github.com/yannickm95/lokalise-to-default-messages/issues/223)) ([3799ce5](https://github.com/yannickm95/lokalise-to-default-messages/commit/3799ce51e8874699fffbe004b51c4e23f00e793d))
* **deps:** bump eslint from 8.25.0 to 8.26.0 ([#231](https://github.com/yannickm95/lokalise-to-default-messages/issues/231)) ([fb11a0c](https://github.com/yannickm95/lokalise-to-default-messages/commit/fb11a0c79103623ec25384340008a75e22831a3f))
* **deps:** bump eslint from 8.26.0 to 8.27.0 ([#235](https://github.com/yannickm95/lokalise-to-default-messages/issues/235)) ([b624884](https://github.com/yannickm95/lokalise-to-default-messages/commit/b624884a38e5b09d85ce7c9bcf024511c1d2ea79))
* **deps:** bump eslint from 8.27.0 to 8.28.0 ([#236](https://github.com/yannickm95/lokalise-to-default-messages/issues/236)) ([30649c2](https://github.com/yannickm95/lokalise-to-default-messages/commit/30649c2ca3040a00d8dcb72d88924cbd97940775))
* **deps:** bump eslint from 8.33.0 to 8.34.0 ([#277](https://github.com/yannickm95/lokalise-to-default-messages/issues/277)) ([75b68e0](https://github.com/yannickm95/lokalise-to-default-messages/commit/75b68e037d30c07463840c616b5edfb94722809a))
* **deps:** bump eslint from 8.36.0 to 8.37.0 ([#300](https://github.com/yannickm95/lokalise-to-default-messages/issues/300)) ([3e1214d](https://github.com/yannickm95/lokalise-to-default-messages/commit/3e1214ded1809e92c5ede3d0c90d9395074761c7))
* **deps:** bump eslint from 8.37.0 to 8.38.0 ([#302](https://github.com/yannickm95/lokalise-to-default-messages/issues/302)) ([7895673](https://github.com/yannickm95/lokalise-to-default-messages/commit/7895673fb2c82bac5508f0fb427a0cbe6118d442))
* **deps:** bump eslint from 8.38.0 to 8.39.0 ([#310](https://github.com/yannickm95/lokalise-to-default-messages/issues/310)) ([2d9de4a](https://github.com/yannickm95/lokalise-to-default-messages/commit/2d9de4ab992e1a1c7c138e85ca68564718546648))
* **deps:** bump eslint from 8.43.0 to 8.44.0 ([#347](https://github.com/yannickm95/lokalise-to-default-messages/issues/347)) ([24c7167](https://github.com/yannickm95/lokalise-to-default-messages/commit/24c71678c7817b8b83b10f0bc120a6676f108b3d))
* **deps:** bump eslint from 8.44.0 to 8.45.0 ([#351](https://github.com/yannickm95/lokalise-to-default-messages/issues/351)) ([76f3b45](https://github.com/yannickm95/lokalise-to-default-messages/commit/76f3b4543df439b2865e074ff7d89c26664eb643))
* **deps:** bump eslint from 8.45.0 to 8.46.0 ([#356](https://github.com/yannickm95/lokalise-to-default-messages/issues/356)) ([d9cfeeb](https://github.com/yannickm95/lokalise-to-default-messages/commit/d9cfeebe4e3013777873a4f1dd23fda0457cbc0e))
* **deps:** bump eslint from 8.47.0 to 8.48.0 ([#368](https://github.com/yannickm95/lokalise-to-default-messages/issues/368)) ([61e8edc](https://github.com/yannickm95/lokalise-to-default-messages/commit/61e8edc71284dccd181843ca670578138ca661da))
* **deps:** bump eslint from 8.48.0 to 8.49.0 ([#374](https://github.com/yannickm95/lokalise-to-default-messages/issues/374)) ([feb503d](https://github.com/yannickm95/lokalise-to-default-messages/commit/feb503d3c1fb31caee137e4c61f40511e16451ac))
* **deps:** bump eslint from 8.49.0 to 8.50.0 ([#376](https://github.com/yannickm95/lokalise-to-default-messages/issues/376)) ([1df8591](https://github.com/yannickm95/lokalise-to-default-messages/commit/1df8591c87314c9184dde0ce5619560446952ede))
* **deps:** bump eslint from 8.50.0 to 8.51.0 ([#380](https://github.com/yannickm95/lokalise-to-default-messages/issues/380)) ([cb14d62](https://github.com/yannickm95/lokalise-to-default-messages/commit/cb14d62cedf2411d8ed5d3908cd5e80dc8f55a50))
* **deps:** bump eslint from 8.51.0 to 8.52.0 ([#391](https://github.com/yannickm95/lokalise-to-default-messages/issues/391)) ([db71fcf](https://github.com/yannickm95/lokalise-to-default-messages/commit/db71fcff8933b38b3f808bb6c3693b421f1243e6))
* **deps:** bump eslint from 8.52.0 to 8.53.0 ([#403](https://github.com/yannickm95/lokalise-to-default-messages/issues/403)) ([5642cc1](https://github.com/yannickm95/lokalise-to-default-messages/commit/5642cc17932ea1d9b8989b157e29f9c28e4128fc))
* **deps:** bump eslint from 8.53.0 to 8.54.0 ([#416](https://github.com/yannickm95/lokalise-to-default-messages/issues/416)) ([1364b94](https://github.com/yannickm95/lokalise-to-default-messages/commit/1364b94e0440d2aed13c3ca2afb1a0313bc46cd7))
* **deps:** bump eslint from 8.54.0 to 8.55.0 ([#422](https://github.com/yannickm95/lokalise-to-default-messages/issues/422)) ([2d2e4cd](https://github.com/yannickm95/lokalise-to-default-messages/commit/2d2e4cd3ea05c87667ed01a068e167fdb7d53405))
* **deps:** bump eslint from v8.39.0 to v8.40.0 ([e566392](https://github.com/yannickm95/lokalise-to-default-messages/commit/e566392dbfd50a8d24f8c028a63e82fb31a14398))
* **deps:** bump husky from 8.0.1 to 8.0.2 ([#234](https://github.com/yannickm95/lokalise-to-default-messages/issues/234)) ([b716443](https://github.com/yannickm95/lokalise-to-default-messages/commit/b7164438b107cd3a3d19c3366806d2c9a21127b4))
* **deps:** bump lint-staged + update underling deps ([9e803dc](https://github.com/yannickm95/lokalise-to-default-messages/commit/9e803dccd414c7aa5f4afefdd49bbbcae64396a3))
* **deps:** bump lint-staged from 12.4.1 to 12.4.2 ([#200](https://github.com/yannickm95/lokalise-to-default-messages/issues/200)) ([7a3d1ef](https://github.com/yannickm95/lokalise-to-default-messages/commit/7a3d1efece69ab921d991b6b77229f98120da474))
* **deps:** bump lint-staged from 12.4.2 to 12.4.3 ([#204](https://github.com/yannickm95/lokalise-to-default-messages/issues/204)) ([8c4536f](https://github.com/yannickm95/lokalise-to-default-messages/commit/8c4536fde4eb1215ab1bb863e3a5153041b27a82))
* **deps:** bump lint-staged from 12.5.0 to 13.0.0 ([#208](https://github.com/yannickm95/lokalise-to-default-messages/issues/208)) ([ad5733c](https://github.com/yannickm95/lokalise-to-default-messages/commit/ad5733c5ec54e72d5b40ce9f8877c2fa76637dda))
* **deps:** bump lint-staged from 13.0.0 to 13.0.1 ([#210](https://github.com/yannickm95/lokalise-to-default-messages/issues/210)) ([1c77f04](https://github.com/yannickm95/lokalise-to-default-messages/commit/1c77f04698e421c821eac1b795c290fabe48cf94))
* **deps:** bump lint-staged from 13.0.1 to 13.0.2 ([#213](https://github.com/yannickm95/lokalise-to-default-messages/issues/213)) ([b11ef07](https://github.com/yannickm95/lokalise-to-default-messages/commit/b11ef0700a6f9eca7f8045288ba87f9747974232))
* **deps:** bump lint-staged from 13.0.3 to 13.0.4 ([#240](https://github.com/yannickm95/lokalise-to-default-messages/issues/240)) ([7aaa3c3](https://github.com/yannickm95/lokalise-to-default-messages/commit/7aaa3c3cd11154aac2d19e458e8ee4652eb90a00))
* **deps:** bump lint-staged from 13.1.0 to 13.1.1 ([#273](https://github.com/yannickm95/lokalise-to-default-messages/issues/273)) ([6f8913e](https://github.com/yannickm95/lokalise-to-default-messages/commit/6f8913ed6f84100da538cf2f95a6acb83c4d81af))
* **deps:** bump lint-staged from 13.2.0 to 13.2.1 ([#303](https://github.com/yannickm95/lokalise-to-default-messages/issues/303)) ([7729477](https://github.com/yannickm95/lokalise-to-default-messages/commit/7729477310a7425e51e107b030cc0a8ce6206f00))
* **deps:** bump lint-staged from 13.2.1 to 13.2.2 ([#314](https://github.com/yannickm95/lokalise-to-default-messages/issues/314)) ([0519d86](https://github.com/yannickm95/lokalise-to-default-messages/commit/0519d8689d7aafb316121be4db1f02d6cf4815ff))
* **deps:** bump lint-staged from 14.0.1 to 15.0.1 ([#384](https://github.com/yannickm95/lokalise-to-default-messages/issues/384)) ([c607d0e](https://github.com/yannickm95/lokalise-to-default-messages/commit/c607d0efd6341a79c0b673da6f745ef605e335b5))
* **deps:** bump lint-staged from 15.0.1 to 15.0.2 ([#387](https://github.com/yannickm95/lokalise-to-default-messages/issues/387)) ([a3b08d9](https://github.com/yannickm95/lokalise-to-default-messages/commit/a3b08d92929dea14b2f3a74c9164f872a4a4776f))
* **deps:** bump prettier from 2.6.2 to 2.7.0 ([#211](https://github.com/yannickm95/lokalise-to-default-messages/issues/211)) ([d2d2ce0](https://github.com/yannickm95/lokalise-to-default-messages/commit/d2d2ce0e0ca51a3b1a3b3e69031464aea81e8e73))
* **deps:** bump prettier from 2.7.0 to 2.7.1 ([#212](https://github.com/yannickm95/lokalise-to-default-messages/issues/212)) ([65ccc9f](https://github.com/yannickm95/lokalise-to-default-messages/commit/65ccc9f736c6b90add4690b29ff856422353e2e6))
* **deps:** bump prettier from 2.7.1 to 2.8.0 ([#239](https://github.com/yannickm95/lokalise-to-default-messages/issues/239)) ([7d580a6](https://github.com/yannickm95/lokalise-to-default-messages/commit/7d580a6e741101be7721b51aa2fad4f54df2afde))
* **deps:** bump prettier from 2.8.0 to 2.8.1 ([#243](https://github.com/yannickm95/lokalise-to-default-messages/issues/243)) ([9b7d3da](https://github.com/yannickm95/lokalise-to-default-messages/commit/9b7d3da076bae060602e107b0554c7b8f444cd03))
* **deps:** bump prettier from 2.8.1 to 2.8.2 ([#260](https://github.com/yannickm95/lokalise-to-default-messages/issues/260)) ([e693436](https://github.com/yannickm95/lokalise-to-default-messages/commit/e6934361760f3f3d8047f5d42219c6069ccfa016))
* **deps:** bump prettier from 2.8.3 to 2.8.4 ([#274](https://github.com/yannickm95/lokalise-to-default-messages/issues/274)) ([4ff41d7](https://github.com/yannickm95/lokalise-to-default-messages/commit/4ff41d703af6408ce55eecc39110c0b63f57aceb))
* **deps:** bump prettier from 2.8.6 to 2.8.7 ([#297](https://github.com/yannickm95/lokalise-to-default-messages/issues/297)) ([7ff96a3](https://github.com/yannickm95/lokalise-to-default-messages/commit/7ff96a3e04e29bac13fe9a604b2bd9b5c5224356))
* **deps:** bump prettier from 2.8.7 to 2.8.8 ([#309](https://github.com/yannickm95/lokalise-to-default-messages/issues/309)) ([563ac4a](https://github.com/yannickm95/lokalise-to-default-messages/commit/563ac4a78c6fa48bf69b92d95b08bbda4bc81eb0))
* **deps:** bump prettier from 3.0.0 to 3.0.1 ([#358](https://github.com/yannickm95/lokalise-to-default-messages/issues/358)) ([25a9437](https://github.com/yannickm95/lokalise-to-default-messages/commit/25a943783e384fab52b72d966ceb1b184d3ad60f))
* **deps:** bump prettier from 3.0.2 to 3.0.3 ([#370](https://github.com/yannickm95/lokalise-to-default-messages/issues/370)) ([cfb8130](https://github.com/yannickm95/lokalise-to-default-messages/commit/cfb8130eb1c7685341609b1e12ac7cde533a2abd))
* **deps:** bump replace-in-file from 6.3.2 to 6.3.3 ([#202](https://github.com/yannickm95/lokalise-to-default-messages/issues/202)) ([8f2b7b5](https://github.com/yannickm95/lokalise-to-default-messages/commit/8f2b7b5d46f7b9f3d4dddd729593a9546f667068))
* **deps:** bump replace-in-file from 6.3.3 to 6.3.5 ([#203](https://github.com/yannickm95/lokalise-to-default-messages/issues/203)) ([18af15f](https://github.com/yannickm95/lokalise-to-default-messages/commit/18af15f2583b9c787a1e9ecca333c109464ceace))
* **deps:** bump replace-in-file, remove @types/node, bump pnpm package manager ([8bd0e69](https://github.com/yannickm95/lokalise-to-default-messages/commit/8bd0e6929169e6142fed5c0d0619ba569bc7fb76))
* **deps:** bump yaml from 2.2.1 to 2.2.2 ([#312](https://github.com/yannickm95/lokalise-to-default-messages/issues/312)) ([081fd9f](https://github.com/yannickm95/lokalise-to-default-messages/commit/081fd9fbd8915229268a25db9f6cbfbd22ae1d5a))
* **deps:** run yarn upgrade ([ee9d999](https://github.com/yannickm95/lokalise-to-default-messages/commit/ee9d9993adc7b45e94ab1cdb10ed141036a97d72))
* **deps:** run yarn upgrade ([b92007a](https://github.com/yannickm95/lokalise-to-default-messages/commit/b92007a7b7bad2ac852fdb69a3ce85dff8fbd007))
* **deps:** update [@commitlint](https://github.com/commitlint) deps ([f5f85cd](https://github.com/yannickm95/lokalise-to-default-messages/commit/f5f85cd597bd6c0e04a6c6417d42550b38e1fd61))
* **deps:** update @types/node and underlying deps ([0953048](https://github.com/yannickm95/lokalise-to-default-messages/commit/0953048c7ce6eb44bb288df159cca3fbdbd6ec06))
* **deps:** update commitlint deps ([03fa5b1](https://github.com/yannickm95/lokalise-to-default-messages/commit/03fa5b11b38d909f43b5c2878271defa09c0eb66))
* **deps:** update depdendencies ([5b3965e](https://github.com/yannickm95/lokalise-to-default-messages/commit/5b3965ee52f69f36c7fb95807617442965d08d06))
* **deps:** update deps ([95efd66](https://github.com/yannickm95/lokalise-to-default-messages/commit/95efd66fc2a3c801a62f727baed16e2053bc9213))
* **deps:** update deps ([72c8f96](https://github.com/yannickm95/lokalise-to-default-messages/commit/72c8f9697f52e0ecc1700b13ac701ea9c5f8dd8d))
* **deps:** update deps ([dcf62e8](https://github.com/yannickm95/lokalise-to-default-messages/commit/dcf62e81ed93c223edeb4e555022f537a1e2edda))
* **deps:** update deps ([4c70327](https://github.com/yannickm95/lokalise-to-default-messages/commit/4c70327a953f14baad17ce703125f2f4072d528f))
* **deps:** update deps ([9b61979](https://github.com/yannickm95/lokalise-to-default-messages/commit/9b619793720d1d18eb6a8951fc7fff1f7c7230b2))
* **deps:** update deps ([9c0239f](https://github.com/yannickm95/lokalise-to-default-messages/commit/9c0239ff56a7f40cc8ceb7e459e611b39c939e16))
* **deps:** update deps ([153c358](https://github.com/yannickm95/lokalise-to-default-messages/commit/153c358b0b8e9cf42c93ad9d99dbf4afe9359113))
* **deps:** update deps ([d8adab2](https://github.com/yannickm95/lokalise-to-default-messages/commit/d8adab23720338cf13aa3f1232de1d1aabec9b5e))
* **deps:** update deps ([2a166ca](https://github.com/yannickm95/lokalise-to-default-messages/commit/2a166ca852d9d238bdb0753cf2712623a7f07f5b))
* **deps:** update deps + bump package manager version ([1c39043](https://github.com/yannickm95/lokalise-to-default-messages/commit/1c390438eea1c0bee5f683b66e0950a74a93430f))
* **deps:** update deps and underlying deps ([b179034](https://github.com/yannickm95/lokalise-to-default-messages/commit/b1790345018ddcfce4464b19b451f8a1eeb6ea22))
* **deps:** update eslint 8.41.0 -&gt; 8.42.0 ([1ff38e4](https://github.com/yannickm95/lokalise-to-default-messages/commit/1ff38e42bf29f79c38d3d8a4749a766948944540))
* **deps:** update package manager ([cf3c213](https://github.com/yannickm95/lokalise-to-default-messages/commit/cf3c2134e5d66ad4ede9bb8db47183385d2385dc))
* **deps:** update package manager and dependencies ([ce2d66d](https://github.com/yannickm95/lokalise-to-default-messages/commit/ce2d66d0f5ae55016b11f79a003bbe8655c6f8db))
* **deps:** update package manager and deps ([e95dfee](https://github.com/yannickm95/lokalise-to-default-messages/commit/e95dfee97be50ffc4ba382c6294c7f96fe6ad5d6))
* **deps:** update package manager and prettier to v3.0.0 ([eaeb7a4](https://github.com/yannickm95/lokalise-to-default-messages/commit/eaeb7a4f8390b8ac4d0cb7891087f43fcdebfb94))
* **deps:** update package manager and underlying deps ([a6cb9e6](https://github.com/yannickm95/lokalise-to-default-messages/commit/a6cb9e678a171bce777c10c62a41ad66a1a09a6d))
* **deps:** update package manager and update underlying deps ([8563a74](https://github.com/yannickm95/lokalise-to-default-messages/commit/8563a74db9421a6382b3d0aeaa973c78fb0f8a8b))
* **deps:** update package manager and update underlying deps ([315cdda](https://github.com/yannickm95/lokalise-to-default-messages/commit/315cddac80deb6080e7c2f318081ed7c8135e505))
* **deps:** update package manager and update underlying deps ([bf959d2](https://github.com/yannickm95/lokalise-to-default-messages/commit/bf959d2993ec7692bad89192704c4661d35cfc89))
* **deps:** update package manager version ([#414](https://github.com/yannickm95/lokalise-to-default-messages/issues/414)) ([ff50c8e](https://github.com/yannickm95/lokalise-to-default-messages/commit/ff50c8e933462fe104b5093355387d0c8bf14d08))
* **deps:** update package manager version + update underlying deps ([41b9776](https://github.com/yannickm95/lokalise-to-default-messages/commit/41b97761491e170328bc9b9f36a0b692008312e2))
* **deps:** update packageManager and dependencies ([07fa219](https://github.com/yannickm95/lokalise-to-default-messages/commit/07fa2195b16f28688ec238dfb13eb4f2216ec044))
* **deps:** update replace-in-file + update package manager ([8e8b952](https://github.com/yannickm95/lokalise-to-default-messages/commit/8e8b9521b782bd819b0ac7a5d5bdbc725eca4f7c))
* **deps:** update underlying depos ([e37c989](https://github.com/yannickm95/lokalise-to-default-messages/commit/e37c989df6994b8c61a6c5112ff87c42ee01db82))
* **deps:** update underlying deps ([cd72b6e](https://github.com/yannickm95/lokalise-to-default-messages/commit/cd72b6e54c3cf2f36619be179a61c435ea437cba))
* **deps:** update underlying deps ([dfecfcb](https://github.com/yannickm95/lokalise-to-default-messages/commit/dfecfcb43cd4cf1e5594b58ad52fbbf07515deed))
* **deps:** update underlying deps ([bab98e4](https://github.com/yannickm95/lokalise-to-default-messages/commit/bab98e4e248c1b3a2c910451027301f7fd672aa3))
* **deps:** update underlying deps ([d1fac49](https://github.com/yannickm95/lokalise-to-default-messages/commit/d1fac4920dfcd6d8f5cb3434cae47f62b0d8d5f8))
* **deps:** update underlying deps ([ae2ed54](https://github.com/yannickm95/lokalise-to-default-messages/commit/ae2ed542bdcd37414c9d62308cc009abc6a1664b))
* **deps:** update yarn version ([4019211](https://github.com/yannickm95/lokalise-to-default-messages/commit/40192118c72b7d7fc38cfc6f8b2e8a793fa75d25))
* **deps:** update yarn version ([c475b85](https://github.com/yannickm95/lokalise-to-default-messages/commit/c475b85582bcdff295c9dc00a4a7b82166daca55))
* drop node 12 and 14 support + lock @types/node to v16 ([adf40ab](https://github.com/yannickm95/lokalise-to-default-messages/commit/adf40abc9a4f3badb19d610c5b0a7fcddd008dfd))
* drop standard-version package ([0978e38](https://github.com/yannickm95/lokalise-to-default-messages/commit/0978e38517ccd1d30fdcdc3da03a83e035666626))
* fix npm publish ([7281e84](https://github.com/yannickm95/lokalise-to-default-messages/commit/7281e84b530df5e9c3be70b61afafc8775625aee))
* fix release-please so we can publish ([0972b32](https://github.com/yannickm95/lokalise-to-default-messages/commit/0972b32a33d021cb40dfa26e95e46c348adbe797))
* fix release-please workfow ([561ec20](https://github.com/yannickm95/lokalise-to-default-messages/commit/561ec2027abf070f3b6249c75e3bbb2a0b090152))
* run ci on release pr's as well ([8f5915b](https://github.com/yannickm95/lokalise-to-default-messages/commit/8f5915bec1fb1b2a7ce3c3fbe0aa61279bfce488))
* run yarn publish command instead of npm ([b635e96](https://github.com/yannickm95/lokalise-to-default-messages/commit/b635e960c8a399698347e427fd277aff476c3b21))
* update dependabot prefixes ([77de44d](https://github.com/yannickm95/lokalise-to-default-messages/commit/77de44d11296c1f09534ace563e0885a25345b0e))
* update release workflow ([b28a6e8](https://github.com/yannickm95/lokalise-to-default-messages/commit/b28a6e823e4842e76c14c174c710324261a42704))
* update release-please changelog types ([bb768c1](https://github.com/yannickm95/lokalise-to-default-messages/commit/bb768c19e8ba2690c19e53c57a0db49eb9f28f29))


### Documentation

* add docs for -- old-translation-path ([19a0c61](https://github.com/yannickm95/lokalise-to-default-messages/commit/19a0c6187d34e99166dca1be75192f0495145c14))
* add old changelog ([463a43f](https://github.com/yannickm95/lokalise-to-default-messages/commit/463a43f02142d9c3c7da561b256272f927be2919))
* update copyright ([7c6b115](https://github.com/yannickm95/lokalise-to-default-messages/commit/7c6b115e8ca88251000288210b879cf83ba8dc93))
* update copyright and license ([88dd2b8](https://github.com/yannickm95/lokalise-to-default-messages/commit/88dd2b8128874b6b7194867770c2dc60cc2dc8f3))
* update v2 ESM information ([213fecb](https://github.com/yannickm95/lokalise-to-default-messages/commit/213fecb0fb995dec4ef9f19afa5e7c6343884c57))


### Miscellaneous

* apply prefer-const eslint rule ([595a38c](https://github.com/yannickm95/lokalise-to-default-messages/commit/595a38c1386937e3e70183b69789d66cb58db8eb))
* bump eslint ([a168597](https://github.com/yannickm95/lokalise-to-default-messages/commit/a16859754ded947ccf134447b26830bfae0d0a0c))
* bump package.json with correct version number of deps ([b5ebc70](https://github.com/yannickm95/lokalise-to-default-messages/commit/b5ebc703edcfb9ca0ed76a33ee03b48ea5358e1a))
* **ci-deps:** bump actions/checkout from 2 to 2.3.4 ([#69](https://github.com/yannickm95/lokalise-to-default-messages/issues/69)) ([d0a1ae9](https://github.com/yannickm95/lokalise-to-default-messages/commit/d0a1ae9c3bfd08a2715693d8a443d5cb72ced6a5))
* **ci-deps:** bump actions/checkout from 2.3.4 to 2.3.5 ([c7e5d21](https://github.com/yannickm95/lokalise-to-default-messages/commit/c7e5d217f52cb75f392877ccc453cb04306ecb5f))
* **ci-deps:** bump actions/checkout from 2.3.5 to 2.4.0 ([95d762d](https://github.com/yannickm95/lokalise-to-default-messages/commit/95d762d1b903b2b933e9231d88ffbc7577584463))
* **ci-deps:** bump actions/checkout from 2.4.0 to 3 ([773b559](https://github.com/yannickm95/lokalise-to-default-messages/commit/773b559f7535b8954e9ae41ae32979469bfbb263))
* **ci-deps:** bump actions/setup-node from 2.1.5 to 2.2.0 ([#88](https://github.com/yannickm95/lokalise-to-default-messages/issues/88)) ([83a17e4](https://github.com/yannickm95/lokalise-to-default-messages/commit/83a17e4ff4b623288b1e2c0bbeabc4eadd69624d))
* **ci-deps:** bump actions/setup-node from 2.2.0 to 2.3.0 ([ba5b650](https://github.com/yannickm95/lokalise-to-default-messages/commit/ba5b65016e4ae1e295f2b6fdde18b856cdbbe9d8))
* **ci-deps:** bump actions/setup-node from 2.3.0 to 2.3.1 ([e53d2fe](https://github.com/yannickm95/lokalise-to-default-messages/commit/e53d2fec4b0111e2e8dc016d19e706ce52e05655))
* **ci-deps:** bump actions/setup-node from 2.3.1 to 2.3.2 ([255d8f0](https://github.com/yannickm95/lokalise-to-default-messages/commit/255d8f04dd56e85a2c680b7fcdddbd1082b329e2))
* **ci-deps:** bump actions/setup-node from 2.3.2 to 2.4.0 ([4cd6a95](https://github.com/yannickm95/lokalise-to-default-messages/commit/4cd6a95dcf813785b88fe897a4f168832dceb129))
* **ci-deps:** bump actions/setup-node from 2.4.0 to 2.4.1 ([ec61f76](https://github.com/yannickm95/lokalise-to-default-messages/commit/ec61f767d83c47f156c2d443a9d5f4c69cc05927))
* **ci-deps:** bump actions/setup-node from 2.4.1 to 2.5.0 ([a256df5](https://github.com/yannickm95/lokalise-to-default-messages/commit/a256df58662ac0376daff6d40ebbf014aa49f66c))
* **ci-deps:** bump actions/setup-node from 2.5.0 to 2.5.1 ([92cf2ee](https://github.com/yannickm95/lokalise-to-default-messages/commit/92cf2eea46090dd698db06740b49658e320edc6a))
* **ci-deps:** bump actions/setup-node from 2.5.1 to 3.0.0 ([65e88c8](https://github.com/yannickm95/lokalise-to-default-messages/commit/65e88c86be7ac2e9bb6ddbccbcc1ec7dd76f1666))
* **ci-deps:** bump actions/setup-node from 3.0.0 to 3.1.0 ([#169](https://github.com/yannickm95/lokalise-to-default-messages/issues/169)) ([66693c1](https://github.com/yannickm95/lokalise-to-default-messages/commit/66693c12e41e79bd6887dbc7eaf8bdde6f2d28b5))
* **ci-deps:** bump actions/setup-node from 3.1.0 to 3.1.1 ([#172](https://github.com/yannickm95/lokalise-to-default-messages/issues/172)) ([242d1af](https://github.com/yannickm95/lokalise-to-default-messages/commit/242d1af4c7cbe068f2a30f1a39e6d5a80f2c35d5))
* **ci-deps:** bump actions/setup-node from 3.1.1 to 3.2.0 ([#185](https://github.com/yannickm95/lokalise-to-default-messages/issues/185)) ([810d003](https://github.com/yannickm95/lokalise-to-default-messages/commit/810d003b1024b93d7bde414c67819655d9dab7f8))
* **ci-deps:** bump actions/setup-node from v2.1.2 to v2.1.3 ([#32](https://github.com/yannickm95/lokalise-to-default-messages/issues/32)) ([ec8674a](https://github.com/yannickm95/lokalise-to-default-messages/commit/ec8674a7ec08ce8029672ea7eba2b23fb2542908))
* **ci-deps:** bump actions/setup-node from v2.1.3 to v2.1.4 ([#35](https://github.com/yannickm95/lokalise-to-default-messages/issues/35)) ([40efc23](https://github.com/yannickm95/lokalise-to-default-messages/commit/40efc237b254567a57f5e034d23567e317fda0ee))
* **ci-deps:** bump actions/setup-node from v2.1.4 to v2.1.5 ([#48](https://github.com/yannickm95/lokalise-to-default-messages/issues/48)) ([b37bb45](https://github.com/yannickm95/lokalise-to-default-messages/commit/b37bb451152ee3b3f8780dc2dfbe9fe3b42cef7f))
* **ci-deps:** bump github/codeql-action from 1 to 2 ([#176](https://github.com/yannickm95/lokalise-to-default-messages/issues/176)) ([1d1964b](https://github.com/yannickm95/lokalise-to-default-messages/commit/1d1964bfdf2699dd14b8256057b04f657385169b))
* **ci:** add release-please as an action instead of bot ([fcc1d2d](https://github.com/yannickm95/lokalise-to-default-messages/commit/fcc1d2dfc45c5fe67eb2bc403c10aed404690e8d))
* cleanup build + update deps ([54a8972](https://github.com/yannickm95/lokalise-to-default-messages/commit/54a897206d7302b9f16ef476c7fd0604d07c7361))
* cleanup linters ([72ffeca](https://github.com/yannickm95/lokalise-to-default-messages/commit/72ffeca3bade7b65756aba9c8ca09db6a63d1fc8))
* delete unused file ([333af84](https://github.com/yannickm95/lokalise-to-default-messages/commit/333af84c0ffdddd031e0b4276255dd6f2dccbc61))
* **deps:** bump @commitlint/cli from 11.0.0 to 12.0.0 ([#50](https://github.com/yannickm95/lokalise-to-default-messages/issues/50)) ([3da73c4](https://github.com/yannickm95/lokalise-to-default-messages/commit/3da73c423cde6957f754c8e32ed11315140ba423))
* **deps:** bump @commitlint/cli from 12.0.0 to 12.0.1 ([#52](https://github.com/yannickm95/lokalise-to-default-messages/issues/52)) ([5601924](https://github.com/yannickm95/lokalise-to-default-messages/commit/56019242f30ad83477ef9241a05b1368718c854e))
* **deps:** bump @commitlint/cli from 12.0.1 to 12.1.1 ([#62](https://github.com/yannickm95/lokalise-to-default-messages/issues/62)) ([8185f11](https://github.com/yannickm95/lokalise-to-default-messages/commit/8185f113a6f0e539d92cacf586e00eeaf098a859))
* **deps:** bump @commitlint/cli from 12.1.1 to 12.1.3 ([#70](https://github.com/yannickm95/lokalise-to-default-messages/issues/70)) ([ad5b31e](https://github.com/yannickm95/lokalise-to-default-messages/commit/ad5b31ea5809361fa496f5f83565744a2d6a405a))
* **deps:** bump @commitlint/cli from 12.1.3 to 12.1.4 ([#72](https://github.com/yannickm95/lokalise-to-default-messages/issues/72)) ([1f16dc4](https://github.com/yannickm95/lokalise-to-default-messages/commit/1f16dc4bb618eae7a46b1b89413ef1f18b83acd8))
* **deps:** bump @commitlint/cli from 12.1.4 to 13.1.0 ([c421a3d](https://github.com/yannickm95/lokalise-to-default-messages/commit/c421a3d817b79ee4a9d87ed345d6605d08766c6a))
* **deps:** bump @commitlint/cli from 13.1.0 to 13.2.0 ([45fe252](https://github.com/yannickm95/lokalise-to-default-messages/commit/45fe252140d054ddb533e18e082e27b8d5d8e9ff))
* **deps:** bump @commitlint/cli from 13.2.0 to 13.2.1 ([3db66d8](https://github.com/yannickm95/lokalise-to-default-messages/commit/3db66d8c18c508c2df873db175468f0cf202d243))
* **deps:** bump @commitlint/cli from 14.1.0 to 15.0.0 ([798f0dc](https://github.com/yannickm95/lokalise-to-default-messages/commit/798f0dc90a3c74932b136e1670a12e0a8b2331d0))
* **deps:** bump @commitlint/cli from 16.0.1 to 16.0.2 ([37acf0f](https://github.com/yannickm95/lokalise-to-default-messages/commit/37acf0f61d37968af8e6d19b13222f1cdce9a85f))
* **deps:** bump @commitlint/cli from 16.0.2 to 16.0.3 ([53f6411](https://github.com/yannickm95/lokalise-to-default-messages/commit/53f641147dd791d35d42105fac82777b5e2b8c16))
* **deps:** bump @commitlint/cli from 16.0.3 to 16.1.0 ([fc936de](https://github.com/yannickm95/lokalise-to-default-messages/commit/fc936ded3cc7de66a481f43eec7bffdce4ca829d))
* **deps:** bump @commitlint/cli from 16.1.0 to 16.2.1 ([a1508f2](https://github.com/yannickm95/lokalise-to-default-messages/commit/a1508f239d7c92cdb9754447a26b548a7ac90d81))
* **deps:** bump @commitlint/cli from 16.2.1 to 16.2.3 ([6a79c17](https://github.com/yannickm95/lokalise-to-default-messages/commit/6a79c178ddd3dafbdde9c50b51d928d21b970308))
* **deps:** bump @commitlint/cli from 16.2.3 to 16.2.4 ([#178](https://github.com/yannickm95/lokalise-to-default-messages/issues/178)) ([9120f1f](https://github.com/yannickm95/lokalise-to-default-messages/commit/9120f1fe10198cae71432298657ed3f4bd6abaf2))
* **deps:** bump @commitlint/cli from 16.2.4 to 16.3.0 ([#184](https://github.com/yannickm95/lokalise-to-default-messages/issues/184)) ([97c55e3](https://github.com/yannickm95/lokalise-to-default-messages/commit/97c55e330b58e0c5a2b7d40795a35f42cce235f2))
* **deps:** bump @commitlint/config-conventional from 11.0.0 to 12.0.0 ([#49](https://github.com/yannickm95/lokalise-to-default-messages/issues/49)) ([5d860c1](https://github.com/yannickm95/lokalise-to-default-messages/commit/5d860c192c270a3e741be984e1e48904420af8a1))
* **deps:** bump @commitlint/config-conventional from 12.0.0 to 12.0.1 ([#55](https://github.com/yannickm95/lokalise-to-default-messages/issues/55)) ([c031644](https://github.com/yannickm95/lokalise-to-default-messages/commit/c0316442d355a60601e71e7e6309a5088f988fb7))
* **deps:** bump @commitlint/config-conventional from 12.0.1 to 12.1.1 ([#61](https://github.com/yannickm95/lokalise-to-default-messages/issues/61)) ([96d433b](https://github.com/yannickm95/lokalise-to-default-messages/commit/96d433b069bdd24b819189d6806657210a859ad5))
* **deps:** bump @commitlint/config-conventional from 12.1.1 to 12.1.3 ([#71](https://github.com/yannickm95/lokalise-to-default-messages/issues/71)) ([05ff26c](https://github.com/yannickm95/lokalise-to-default-messages/commit/05ff26c08522527cf89d6d61c5304bf04f5f2d09))
* **deps:** bump @commitlint/config-conventional from 12.1.3 to 12.1.4 ([#73](https://github.com/yannickm95/lokalise-to-default-messages/issues/73)) ([53f0af2](https://github.com/yannickm95/lokalise-to-default-messages/commit/53f0af22fb72717413cb7061d39ea9c6e9523148))
* **deps:** bump @commitlint/config-conventional from 12.1.4 to 13.1.0 ([3c78778](https://github.com/yannickm95/lokalise-to-default-messages/commit/3c7877898e5bd021186dcb38b4c7c42a6ea2be33))
* **deps:** bump @commitlint/config-conventional from 13.1.0 to 13.2.0 ([a2a0a68](https://github.com/yannickm95/lokalise-to-default-messages/commit/a2a0a68ff83f2224f280637b15c4f6c56829bf79))
* **deps:** bump @commitlint/config-conventional from 13.2.0 to 14.1.0 ([31d2e08](https://github.com/yannickm95/lokalise-to-default-messages/commit/31d2e089986f9eba26845319a54ff1f2d1805a6e))
* **deps:** bump @commitlint/config-conventional from 14.1.0 to 15.0.0 ([a6cf278](https://github.com/yannickm95/lokalise-to-default-messages/commit/a6cf27863206c11782658daf52db47de9233ac2e))
* **deps:** bump @commitlint/config-conventional from 16.0.0 to 16.2.1 ([1d181b3](https://github.com/yannickm95/lokalise-to-default-messages/commit/1d181b381435b120438f774f64f4e880b07ad3fd))
* **deps:** bump @commitlint/config-conventional from 16.2.1 to 16.2.4 ([#179](https://github.com/yannickm95/lokalise-to-default-messages/issues/179)) ([d97f6b2](https://github.com/yannickm95/lokalise-to-default-messages/commit/d97f6b21c18257c116303e3469eae3f959063b97))
* **deps:** bump ansi-regex from 5.0.0 to 5.0.1 ([4ed7b6e](https://github.com/yannickm95/lokalise-to-default-messages/commit/4ed7b6e3c9d14e5f377d8eb457362b7ff9e77791))
* **deps:** bump cli-progress from 3.10.0 to 3.11.0 ([#180](https://github.com/yannickm95/lokalise-to-default-messages/issues/180)) ([2d6a91e](https://github.com/yannickm95/lokalise-to-default-messages/commit/2d6a91e49a19f3a970d24b113a0b15d03407fe6e))
* **deps:** bump cli-progress from 3.8.2 to 3.9.0 ([#44](https://github.com/yannickm95/lokalise-to-default-messages/issues/44)) ([6ccec68](https://github.com/yannickm95/lokalise-to-default-messages/commit/6ccec68e1739ee6bf8e86a9ac33497650073a3c7))
* **deps:** bump cli-progress from 3.9.0 to 3.9.1 ([4453797](https://github.com/yannickm95/lokalise-to-default-messages/commit/44537971634701fdc3aa732dc594dd97e39c9a83))
* **deps:** bump cli-progress from 3.9.1 to 3.10.0 ([4a43e93](https://github.com/yannickm95/lokalise-to-default-messages/commit/4a43e93b6f53efd67acaeb391a70416a69b15dd9))
* **deps:** bump commitlint/cli to 14.1.0 ([21bb50e](https://github.com/yannickm95/lokalise-to-default-messages/commit/21bb50eb3ecb9913d8efa1b6a90853ca60bca037))
* **deps:** bump eslint from 7.13.0 to 7.14.0 ([#28](https://github.com/yannickm95/lokalise-to-default-messages/issues/28)) ([d387783](https://github.com/yannickm95/lokalise-to-default-messages/commit/d387783897f0980dc5f6978a275a79402158b130))
* **deps:** bump eslint from 7.14.0 to 7.15.0 ([#30](https://github.com/yannickm95/lokalise-to-default-messages/issues/30)) ([6f8ff9e](https://github.com/yannickm95/lokalise-to-default-messages/commit/6f8ff9ed5bfb5b486220c7793558e9c1275cc90e))
* **deps:** bump eslint from 7.15.0 to 7.17.0 ([#37](https://github.com/yannickm95/lokalise-to-default-messages/issues/37)) ([c0b1ffa](https://github.com/yannickm95/lokalise-to-default-messages/commit/c0b1ffa325419ee03f7cd69ac981b636e3cf3dd6))
* **deps:** bump eslint from 7.17.0 to 7.18.0 ([#40](https://github.com/yannickm95/lokalise-to-default-messages/issues/40)) ([3440268](https://github.com/yannickm95/lokalise-to-default-messages/commit/344026876b56d46f79ce2d893b2ffebccb57e7e0))
* **deps:** bump eslint from 7.18.0 to 7.19.0 ([#42](https://github.com/yannickm95/lokalise-to-default-messages/issues/42)) ([806c750](https://github.com/yannickm95/lokalise-to-default-messages/commit/806c75091203296c8469b2afa5fc23a3f57d79de))
* **deps:** bump eslint from 7.19.0 to 7.20.0 ([#46](https://github.com/yannickm95/lokalise-to-default-messages/issues/46)) ([a636b82](https://github.com/yannickm95/lokalise-to-default-messages/commit/a636b823273bd32f947a3b071d956c3c2323b8e6))
* **deps:** bump eslint from 7.20.0 to 7.21.0 ([#54](https://github.com/yannickm95/lokalise-to-default-messages/issues/54)) ([b71a1a1](https://github.com/yannickm95/lokalise-to-default-messages/commit/b71a1a1cd361232e2948ca92da1257f2e2cc2db6))
* **deps:** bump eslint from 7.21.0 to 7.22.0 ([#57](https://github.com/yannickm95/lokalise-to-default-messages/issues/57)) ([7d4c11f](https://github.com/yannickm95/lokalise-to-default-messages/commit/7d4c11f8aae503b80905837bf021a54f3d34c101))
* **deps:** bump eslint from 7.22.0 to 7.23.0 ([#59](https://github.com/yannickm95/lokalise-to-default-messages/issues/59)) ([c5a88bd](https://github.com/yannickm95/lokalise-to-default-messages/commit/c5a88bd25e2c289bcba239d07f144a5c67f005d3))
* **deps:** bump eslint from 7.23.0 to 7.24.0 ([#63](https://github.com/yannickm95/lokalise-to-default-messages/issues/63)) ([d91f569](https://github.com/yannickm95/lokalise-to-default-messages/commit/d91f56964f6a6d116ba4a3b64149914d11163591))
* **deps:** bump eslint from 7.24.0 to 7.25.0 ([#64](https://github.com/yannickm95/lokalise-to-default-messages/issues/64)) ([aa72ade](https://github.com/yannickm95/lokalise-to-default-messages/commit/aa72ade99398bbd16bdde603eca4ebca1a3e32c0))
* **deps:** bump eslint from 7.25.0 to 7.26.0 ([#67](https://github.com/yannickm95/lokalise-to-default-messages/issues/67)) ([a508d88](https://github.com/yannickm95/lokalise-to-default-messages/commit/a508d8831634239a25d2617fc9b231541f95bcf9))
* **deps:** bump eslint from 7.26.0 to 7.27.0 ([#74](https://github.com/yannickm95/lokalise-to-default-messages/issues/74)) ([27bc8b9](https://github.com/yannickm95/lokalise-to-default-messages/commit/27bc8b9376ad304f03e9dd1c0ac9a3750d5910dc))
* **deps:** bump eslint from 7.27.0 to 7.28.0 ([#76](https://github.com/yannickm95/lokalise-to-default-messages/issues/76)) ([3181bdb](https://github.com/yannickm95/lokalise-to-default-messages/commit/3181bdb0a8a17c5756f7a539130dbb5da8c9d412))
* **deps:** bump eslint from 7.28.0 to 7.29.0 ([#79](https://github.com/yannickm95/lokalise-to-default-messages/issues/79)) ([618a207](https://github.com/yannickm95/lokalise-to-default-messages/commit/618a2075e04d24b2917c89760a262fa09309e56e))
* **deps:** bump eslint from 7.29.0 to 7.30.0 ([#90](https://github.com/yannickm95/lokalise-to-default-messages/issues/90)) ([2c59c05](https://github.com/yannickm95/lokalise-to-default-messages/commit/2c59c055c6981c1fdf688cfd6f5ac62a988f9f44))
* **deps:** bump eslint from 7.30.0 to 7.31.0 ([8746ec4](https://github.com/yannickm95/lokalise-to-default-messages/commit/8746ec419473298b45e0028d3eda1f720f8e0e5a))
* **deps:** bump eslint from 7.31.0 to 7.32.0 ([9ee5388](https://github.com/yannickm95/lokalise-to-default-messages/commit/9ee53884aea50508facf03e1dbe7fa81ff48dafa))
* **deps:** bump eslint from 7.32.0 to 8.0.0 ([3557f10](https://github.com/yannickm95/lokalise-to-default-messages/commit/3557f10cf69c681527ec6b11b9e99ed968bd650e))
* **deps:** bump eslint from 8.0.0 to 8.0.1 ([269f6da](https://github.com/yannickm95/lokalise-to-default-messages/commit/269f6daf25f6f8f2443fb1f9a48f93deda0d5314))
* **deps:** bump eslint from 8.0.1 to 8.1.0 ([a9d3393](https://github.com/yannickm95/lokalise-to-default-messages/commit/a9d33936ebc8aaa9001a8d51b8f71c2cd1ba3407))
* **deps:** bump eslint from 8.1.0 to 8.2.0 ([52b4afe](https://github.com/yannickm95/lokalise-to-default-messages/commit/52b4afe3255b5d893d327d961ebac9db43e5cb94))
* **deps:** bump eslint from 8.10.0 to 8.11.0 ([c559f24](https://github.com/yannickm95/lokalise-to-default-messages/commit/c559f249735302ca09a920f7049a2da0da3a3cdf))
* **deps:** bump eslint from 8.11.0 to 8.12.0 ([16a8591](https://github.com/yannickm95/lokalise-to-default-messages/commit/16a859133603f11485444d2255fdaa2a11620689))
* **deps:** bump eslint from 8.12.0 to 8.13.0 ([#171](https://github.com/yannickm95/lokalise-to-default-messages/issues/171)) ([4435464](https://github.com/yannickm95/lokalise-to-default-messages/commit/443546454d7838b39a1cff4572b3a457698c5618))
* **deps:** bump eslint from 8.13.0 to 8.14.0 ([#175](https://github.com/yannickm95/lokalise-to-default-messages/issues/175)) ([f84757f](https://github.com/yannickm95/lokalise-to-default-messages/commit/f84757f921c53ead7d2652a559f8beb95cd41e34))
* **deps:** bump eslint from 8.14.0 to 8.15.0 ([#181](https://github.com/yannickm95/lokalise-to-default-messages/issues/181)) ([43f869e](https://github.com/yannickm95/lokalise-to-default-messages/commit/43f869e4c76ec7485598a370c2285939c528f0c9))
* **deps:** bump eslint from 8.2.0 to 8.3.0 ([bb72e5e](https://github.com/yannickm95/lokalise-to-default-messages/commit/bb72e5ecc296905c73131d331231cc2a68b4bf54))
* **deps:** bump eslint from 8.3.0 to 8.4.0 ([c600366](https://github.com/yannickm95/lokalise-to-default-messages/commit/c600366b1540174a826acef3c24c27a816a627ad))
* **deps:** bump eslint from 8.4.0 to 8.4.1 ([af80428](https://github.com/yannickm95/lokalise-to-default-messages/commit/af80428586d3067093ebdfeb51b997578966a3fe))
* **deps:** bump eslint from 8.6.0 to 8.7.0 ([8fdc2f7](https://github.com/yannickm95/lokalise-to-default-messages/commit/8fdc2f7054ae93a7746cc3ff29e8dcf4dfdb626e))
* **deps:** bump eslint from 8.7.0 to 8.8.0 ([bef1e21](https://github.com/yannickm95/lokalise-to-default-messages/commit/bef1e21abc722aabb39ecbff1b6bec1f9189bc81))
* **deps:** bump eslint from 8.8.0 to 8.9.0 ([b30dd40](https://github.com/yannickm95/lokalise-to-default-messages/commit/b30dd40f4fe4790f0cccba477f11b10c3c5c28c8))
* **deps:** bump eslint from 8.9.0 to 8.10.0 ([6d85dfd](https://github.com/yannickm95/lokalise-to-default-messages/commit/6d85dfd54274427a31149c158a1b65ca319ca5e0))
* **deps:** bump husky from 4.3.0 to 4.3.5 ([#31](https://github.com/yannickm95/lokalise-to-default-messages/issues/31)) ([6bbc7a4](https://github.com/yannickm95/lokalise-to-default-messages/commit/6bbc7a40e8e982149948a4496a251e70b44f2610))
* **deps:** bump husky from 4.3.5 to 4.3.6 ([#34](https://github.com/yannickm95/lokalise-to-default-messages/issues/34)) ([3a6ecd9](https://github.com/yannickm95/lokalise-to-default-messages/commit/3a6ecd99d6287d03fd1846abd5637914eb361a55))
* **deps:** bump husky from 4.3.6 to 4.3.7 ([#39](https://github.com/yannickm95/lokalise-to-default-messages/issues/39)) ([c997259](https://github.com/yannickm95/lokalise-to-default-messages/commit/c9972595e5075469455aed2ba5b56ee14d390d5b))
* **deps:** bump husky from 4.3.7 to 4.3.8 ([#41](https://github.com/yannickm95/lokalise-to-default-messages/issues/41)) ([f5698c6](https://github.com/yannickm95/lokalise-to-default-messages/commit/f5698c661239d241be5efbeef620c7830e67d136))
* **deps:** bump husky from 5.0.9 to 5.1.0 ([#47](https://github.com/yannickm95/lokalise-to-default-messages/issues/47)) ([c993753](https://github.com/yannickm95/lokalise-to-default-messages/commit/c9937539e04450e9c1dc142e589844c71011e85a))
* **deps:** bump husky from 5.1.0 to 5.1.1 ([#51](https://github.com/yannickm95/lokalise-to-default-messages/issues/51)) ([2be70a1](https://github.com/yannickm95/lokalise-to-default-messages/commit/2be70a18ecd9ec50d3cb77b49c657deb1a454d6c))
* **deps:** bump husky from 5.1.1 to 5.1.2 ([#53](https://github.com/yannickm95/lokalise-to-default-messages/issues/53)) ([ce4c35b](https://github.com/yannickm95/lokalise-to-default-messages/commit/ce4c35bc915adc426c90d89401cbc83492a7032a))
* **deps:** bump husky from 5.1.2 to 5.1.3 ([#56](https://github.com/yannickm95/lokalise-to-default-messages/issues/56)) ([ca60bb4](https://github.com/yannickm95/lokalise-to-default-messages/commit/ca60bb493fbb94cb3c18daa5532a899fc2ea1a3a))
* **deps:** bump husky from 5.1.3 to 5.2.0 ([#58](https://github.com/yannickm95/lokalise-to-default-messages/issues/58)) ([0afbcf8](https://github.com/yannickm95/lokalise-to-default-messages/commit/0afbcf840462673be8f38c30d746b30bf13f1cfd))
* **deps:** bump husky from 5.2.0 to 6.0.0 ([#60](https://github.com/yannickm95/lokalise-to-default-messages/issues/60)) ([c06289a](https://github.com/yannickm95/lokalise-to-default-messages/commit/c06289ab08ddcd99456f929dd98fd2f09a004e30))
* **deps:** bump husky from 6.0.0 to 7.0.0 ([#89](https://github.com/yannickm95/lokalise-to-default-messages/issues/89)) ([e1c8edc](https://github.com/yannickm95/lokalise-to-default-messages/commit/e1c8edc68d7d039b5e71135a93093537a1cffdac))
* **deps:** bump husky from 7.0.0 to 7.0.1 ([#91](https://github.com/yannickm95/lokalise-to-default-messages/issues/91)) ([400f84b](https://github.com/yannickm95/lokalise-to-default-messages/commit/400f84b0cf1d89af9e8aecb848ecdbb3c41ef6e5))
* **deps:** bump husky from 7.0.1 to 7.0.2 ([e50055a](https://github.com/yannickm95/lokalise-to-default-messages/commit/e50055a838608f2710d913a46afa166e452337e1))
* **deps:** bump husky from 7.0.2 to 7.0.4 ([b153cc5](https://github.com/yannickm95/lokalise-to-default-messages/commit/b153cc53964be91816cf312f0bbbf3513b1fc1d2))
* **deps:** bump husky from 7.0.4 to 8.0.0 ([#182](https://github.com/yannickm95/lokalise-to-default-messages/issues/182)) ([ae3141c](https://github.com/yannickm95/lokalise-to-default-messages/commit/ae3141c4c361cf07956b4968ca789667f4a44820))
* **deps:** bump husky from 8.0.0 to 8.0.1 ([#183](https://github.com/yannickm95/lokalise-to-default-messages/issues/183)) ([5240de2](https://github.com/yannickm95/lokalise-to-default-messages/commit/5240de27f64909799ce9345f5dfe32ffdf6c2bc3))
* **deps:** bump ini from 1.3.5 to 1.3.8 ([#33](https://github.com/yannickm95/lokalise-to-default-messages/issues/33)) ([fbbfc2d](https://github.com/yannickm95/lokalise-to-default-messages/commit/fbbfc2dc77f105c79251b218dfb53325caec44c9))
* **deps:** bump lint-staged from 12.1.5 to 12.1.7 ([a1dd88d](https://github.com/yannickm95/lokalise-to-default-messages/commit/a1dd88d6046effa24d7a1e8da8b2f453127a4a12))
* **deps:** bump lint-staged from 12.1.7 to 12.2.0 ([bbe0a71](https://github.com/yannickm95/lokalise-to-default-messages/commit/bbe0a7124e0f9b404e3f6e83ef97d3d51444b3b8))
* **deps:** bump lint-staged from 12.2.0 to 12.2.1 ([13aa048](https://github.com/yannickm95/lokalise-to-default-messages/commit/13aa048bf4ad629d1cd9306d58347f55848aeb52))
* **deps:** bump lint-staged from 12.2.1 to 12.2.2 ([7f838a3](https://github.com/yannickm95/lokalise-to-default-messages/commit/7f838a30f6bb8bb90e4b690ab5a5da467677b956))
* **deps:** bump lint-staged from 12.2.2 to 12.3.2 ([7d94c89](https://github.com/yannickm95/lokalise-to-default-messages/commit/7d94c89b4a903de660d6bbc99667fc6bb3e2dd6d))
* **deps:** bump lint-staged from 12.3.2 to 12.3.3 ([4c9d925](https://github.com/yannickm95/lokalise-to-default-messages/commit/4c9d925c70a0852ec18a1521b13721af1a04aa7f))
* **deps:** bump lint-staged from 12.3.3 to 12.3.4 ([06eb7d6](https://github.com/yannickm95/lokalise-to-default-messages/commit/06eb7d6d38276405ccc2f92df01b2f35077f1e41))
* **deps:** bump lint-staged from 12.3.4 to 12.3.5 ([796c000](https://github.com/yannickm95/lokalise-to-default-messages/commit/796c000dc9008587fc045ecb3f7a1ce104df093b))
* **deps:** bump lint-staged from 12.3.5 to 12.3.6 ([2ea6fa9](https://github.com/yannickm95/lokalise-to-default-messages/commit/2ea6fa9b43b0fe7d4db28af29815b0153dc62b9d))
* **deps:** bump lint-staged from 12.3.6 to 12.3.7 ([495f95e](https://github.com/yannickm95/lokalise-to-default-messages/commit/495f95e9d0b0b851d31f8ff6ec3e8181ad70bb00))
* **deps:** bump lint-staged from 12.3.7 to 12.3.8 ([#173](https://github.com/yannickm95/lokalise-to-default-messages/issues/173)) ([03fd98e](https://github.com/yannickm95/lokalise-to-default-messages/commit/03fd98e783e1da6b69651609621373ed27d29a45))
* **deps:** bump lint-staged from 12.3.8 to 12.4.0 ([#174](https://github.com/yannickm95/lokalise-to-default-messages/issues/174)) ([c6b5f46](https://github.com/yannickm95/lokalise-to-default-messages/commit/c6b5f464c0372d594a7143c158cf031a18b3d0e5))
* **deps:** bump lint-staged from 12.4.0 to 12.4.1 ([#177](https://github.com/yannickm95/lokalise-to-default-messages/issues/177)) ([f51fce5](https://github.com/yannickm95/lokalise-to-default-messages/commit/f51fce5b432eed11054f7de106542e66340c6392))
* **deps:** bump prettier from 2.1.2 to 2.2.0 ([#27](https://github.com/yannickm95/lokalise-to-default-messages/issues/27)) ([f35195f](https://github.com/yannickm95/lokalise-to-default-messages/commit/f35195fc295b0248f14bf9cc8e597ef0de84d1a7))
* **deps:** bump prettier from 2.2.0 to 2.2.1 ([#29](https://github.com/yannickm95/lokalise-to-default-messages/issues/29)) ([c62e3d5](https://github.com/yannickm95/lokalise-to-default-messages/commit/c62e3d5ec1d9d36a530727530a3b7389ddace365))
* **deps:** bump prettier from 2.2.1 to 2.3.0 ([#68](https://github.com/yannickm95/lokalise-to-default-messages/issues/68)) ([a3bf8a9](https://github.com/yannickm95/lokalise-to-default-messages/commit/a3bf8a9b8b3166fad8df0fbfabf4ded9983b55c6))
* **deps:** bump prettier from 2.3.0 to 2.3.1 ([#75](https://github.com/yannickm95/lokalise-to-default-messages/issues/75)) ([c122b9c](https://github.com/yannickm95/lokalise-to-default-messages/commit/c122b9c50aa343bc4cb298f0473baa440208f262))
* **deps:** bump prettier from 2.3.1 to 2.3.2 ([#80](https://github.com/yannickm95/lokalise-to-default-messages/issues/80)) ([b3985ab](https://github.com/yannickm95/lokalise-to-default-messages/commit/b3985ab91af792e52c9766b2382afb5ab939502b))
* **deps:** bump prettier from 2.3.2 to 2.4.0 ([6870890](https://github.com/yannickm95/lokalise-to-default-messages/commit/6870890138d82e97ed21e41b69ac0983df0534f2))
* **deps:** bump prettier from 2.4.0 to 2.4.1 ([70d94ca](https://github.com/yannickm95/lokalise-to-default-messages/commit/70d94ca8a34120601b39f6f12873006689330f20))
* **deps:** bump prettier from 2.4.1 to 2.5.0 ([799e4e4](https://github.com/yannickm95/lokalise-to-default-messages/commit/799e4e40b1025413d007eb68588262abcf4509a0))
* **deps:** bump prettier from 2.5.0 to 2.5.1 ([6da0ae3](https://github.com/yannickm95/lokalise-to-default-messages/commit/6da0ae3f2b315e1917afcbc61cdfedb0c94e7732))
* **deps:** bump prettier from 2.5.1 to 2.6.0 ([6fe6ef1](https://github.com/yannickm95/lokalise-to-default-messages/commit/6fe6ef19629d10c8769763e2de41f075adbda3ed))
* **deps:** bump prettier from 2.6.0 to 2.6.1 ([#167](https://github.com/yannickm95/lokalise-to-default-messages/issues/167)) ([e732d20](https://github.com/yannickm95/lokalise-to-default-messages/commit/e732d2074ceb399ea3ce8d03436f4d3add467ee0))
* **deps:** bump prettier from 2.6.1 to 2.6.2 ([#170](https://github.com/yannickm95/lokalise-to-default-messages/issues/170)) ([2816c9e](https://github.com/yannickm95/lokalise-to-default-messages/commit/2816c9ebd0fbdc22b9b04d30dbe0f06aeba193d5))
* **deps:** bump replace-in-file from 6.1.0 to 6.2.0 ([#43](https://github.com/yannickm95/lokalise-to-default-messages/issues/43)) ([feda4f0](https://github.com/yannickm95/lokalise-to-default-messages/commit/feda4f0623764250558d9230d9a2fc88438d3bd7))
* **deps:** bump replace-in-file from 6.2.0 to 6.3.1 ([34c6cae](https://github.com/yannickm95/lokalise-to-default-messages/commit/34c6caef0e2cd853d0fcd63981611b304561feb9))
* **deps:** bump replace-in-file from 6.3.1 to 6.3.2 ([ac61fb3](https://github.com/yannickm95/lokalise-to-default-messages/commit/ac61fb3e0e1563a2c885450df10737802d5f9f7c))
* **deps:** bump trim-newlines from 3.0.0 to 3.0.1 ([#77](https://github.com/yannickm95/lokalise-to-default-messages/issues/77)) ([76c6ad1](https://github.com/yannickm95/lokalise-to-default-messages/commit/76c6ad1565775ea4c672a5fac78e41558532cb19))
* **deps:** migrate from npm to yarn ([8a1d83b](https://github.com/yannickm95/lokalise-to-default-messages/commit/8a1d83b71c3365b40a28ce8ffd1a77e0ac2e1f8c))
* **deps:** revert migration to npm ([7c55d33](https://github.com/yannickm95/lokalise-to-default-messages/commit/7c55d335d3f1116f37344282fc541e3c1a08a7ac))
* **deps:** run npm update ([f657d29](https://github.com/yannickm95/lokalise-to-default-messages/commit/f657d29c74429886d46782186f904a3d25baef1a))
* **deps:** run yarn upgrade ([0d6efa3](https://github.com/yannickm95/lokalise-to-default-messages/commit/0d6efa387e0e3e9dbe6d84ad9149c021b7738be7))
* **deps:** run yarn upgrade ([6401736](https://github.com/yannickm95/lokalise-to-default-messages/commit/640173633a1d985e78da222340fc7fce17f45957))
* **deps:** run yarn upgrade ([4277ad7](https://github.com/yannickm95/lokalise-to-default-messages/commit/4277ad7a8f85a3d3ae5c9bc7cf0b763d6eba3a53))
* **deps:** run yarn upgrade ([ddcfe02](https://github.com/yannickm95/lokalise-to-default-messages/commit/ddcfe020d5c9f6043b4b1a33486a5b54b9473ad5))
* **deps:** update and upgrade deps ([7aaf857](https://github.com/yannickm95/lokalise-to-default-messages/commit/7aaf857b57387709e82b3cd1a36f863767b23fee))
* **deps:** update deps ([943edd7](https://github.com/yannickm95/lokalise-to-default-messages/commit/943edd70a890e285c236fe8ac21bac7d36a42615))
* drop support for node 17 and lower, 18 or higher only is now supported ([d435745](https://github.com/yannickm95/lokalise-to-default-messages/commit/d4357454a9685d0e6d2fea9a6223b827d1d63a37))
* fix version ([e4516d8](https://github.com/yannickm95/lokalise-to-default-messages/commit/e4516d800b922e86013c2d140385c2e77918da8a))
* increase prettier print width ([4603725](https://github.com/yannickm95/lokalise-to-default-messages/commit/460372508186ec1f68a91edd60f51bcd9f69ee0e))
* **main:** release 2.1.0 ([#193](https://github.com/yannickm95/lokalise-to-default-messages/issues/193)) ([dcbb496](https://github.com/yannickm95/lokalise-to-default-messages/commit/dcbb496d85cede375a4b7ceecaad24bcbbce82b8))
* **main:** release 2.1.1 ([#194](https://github.com/yannickm95/lokalise-to-default-messages/issues/194)) ([11731ba](https://github.com/yannickm95/lokalise-to-default-messages/commit/11731ba4a20813e53ed5e03059ababa43940b764))
* **main:** release 2.1.2 ([#196](https://github.com/yannickm95/lokalise-to-default-messages/issues/196)) ([d072f73](https://github.com/yannickm95/lokalise-to-default-messages/commit/d072f739bdb0225f7de3639d770248d05bc2bf1f))
* **main:** release 2.1.3 ([#197](https://github.com/yannickm95/lokalise-to-default-messages/issues/197)) ([b0b2f4d](https://github.com/yannickm95/lokalise-to-default-messages/commit/b0b2f4ddb19e3316a7316d582946e35fd163bff5))
* **main:** release 2.1.4 ([#198](https://github.com/yannickm95/lokalise-to-default-messages/issues/198)) ([af87eb0](https://github.com/yannickm95/lokalise-to-default-messages/commit/af87eb06072ac04e61dd2309f80ba054bf965816))
* **main:** release 2.2.0 ([#222](https://github.com/yannickm95/lokalise-to-default-messages/issues/222)) ([abf44ca](https://github.com/yannickm95/lokalise-to-default-messages/commit/abf44caf8a08eacf7deff814f7080113c18047f0))
* **main:** release 2.3.0 ([#229](https://github.com/yannickm95/lokalise-to-default-messages/issues/229)) ([c02ab3d](https://github.com/yannickm95/lokalise-to-default-messages/commit/c02ab3da9e52de57b5bbd7929a37d90e65c3ff97))
* **main:** release 2.4.0 ([#251](https://github.com/yannickm95/lokalise-to-default-messages/issues/251)) ([f472f5f](https://github.com/yannickm95/lokalise-to-default-messages/commit/f472f5f544893f9c1f0b2818b279c29996b38110))
* **main:** release 2.4.1 ([#252](https://github.com/yannickm95/lokalise-to-default-messages/issues/252)) ([6e7789e](https://github.com/yannickm95/lokalise-to-default-messages/commit/6e7789ef206266784e89f2b60825ad6e751a2b52))
* **main:** release 2.4.10 ([#298](https://github.com/yannickm95/lokalise-to-default-messages/issues/298)) ([32a70b7](https://github.com/yannickm95/lokalise-to-default-messages/commit/32a70b7d22eefde2d8f84ee5cff0b76e4a2b58bb))
* **main:** release 2.4.11 ([#311](https://github.com/yannickm95/lokalise-to-default-messages/issues/311)) ([bc17446](https://github.com/yannickm95/lokalise-to-default-messages/commit/bc1744614387ee27fc55374a4c85bd63fdb9c846))
* **main:** release 2.4.12 ([#313](https://github.com/yannickm95/lokalise-to-default-messages/issues/313)) ([1f3b595](https://github.com/yannickm95/lokalise-to-default-messages/commit/1f3b595b20370bc2167d8fbcd4b9bb2619b79194))
* **main:** release 2.4.13 ([#317](https://github.com/yannickm95/lokalise-to-default-messages/issues/317)) ([d8dfb2b](https://github.com/yannickm95/lokalise-to-default-messages/commit/d8dfb2b4ae77a62d9e4117297109dc53d0a1b065))
* **main:** release 2.4.14 ([#318](https://github.com/yannickm95/lokalise-to-default-messages/issues/318)) ([3e0ed2f](https://github.com/yannickm95/lokalise-to-default-messages/commit/3e0ed2f263e678fde00175ca6ad7250eb767bf15))
* **main:** release 2.4.15 ([#319](https://github.com/yannickm95/lokalise-to-default-messages/issues/319)) ([130624b](https://github.com/yannickm95/lokalise-to-default-messages/commit/130624b46a84f642cedb66c5a9e040b5a1c03dcc))
* **main:** release 2.4.16 ([#326](https://github.com/yannickm95/lokalise-to-default-messages/issues/326)) ([aae5b26](https://github.com/yannickm95/lokalise-to-default-messages/commit/aae5b2694d4839c46ab269867dde6fd2809d15e1))
* **main:** release 2.4.17 ([#332](https://github.com/yannickm95/lokalise-to-default-messages/issues/332)) ([4c5da71](https://github.com/yannickm95/lokalise-to-default-messages/commit/4c5da714783995d01159bca686457c6d96489398))
* **main:** release 2.4.18 ([#337](https://github.com/yannickm95/lokalise-to-default-messages/issues/337)) ([c0ec67b](https://github.com/yannickm95/lokalise-to-default-messages/commit/c0ec67b8159bdb31a350b7de3d2972f87d4c916e))
* **main:** release 2.4.19 ([#346](https://github.com/yannickm95/lokalise-to-default-messages/issues/346)) ([2e328de](https://github.com/yannickm95/lokalise-to-default-messages/commit/2e328de55c75e0b3e69360784b8b08c45eadc792))
* **main:** release 2.4.2 ([#253](https://github.com/yannickm95/lokalise-to-default-messages/issues/253)) ([01fbdbc](https://github.com/yannickm95/lokalise-to-default-messages/commit/01fbdbc6c2f1290d08d7432d6c23d56d8e2a1c69))
* **main:** release 2.4.3 ([#254](https://github.com/yannickm95/lokalise-to-default-messages/issues/254)) ([0105079](https://github.com/yannickm95/lokalise-to-default-messages/commit/010507942c79a5304401759e2de960365c87c970))
* **main:** release 2.4.4 ([#256](https://github.com/yannickm95/lokalise-to-default-messages/issues/256)) ([eac0d9f](https://github.com/yannickm95/lokalise-to-default-messages/commit/eac0d9fc6f2b3119a7ac50348b0cdd22a49f3e2c))
* **main:** release 2.4.5 ([#257](https://github.com/yannickm95/lokalise-to-default-messages/issues/257)) ([07357f5](https://github.com/yannickm95/lokalise-to-default-messages/commit/07357f5bd072bacc3a9e1df52eb75d658c84bbd6))
* **main:** release 2.4.6 ([#258](https://github.com/yannickm95/lokalise-to-default-messages/issues/258)) ([5a29403](https://github.com/yannickm95/lokalise-to-default-messages/commit/5a2940304daf8e2204467af821c9cabfe725811d))
* **main:** release 2.4.7 ([#259](https://github.com/yannickm95/lokalise-to-default-messages/issues/259)) ([31875f3](https://github.com/yannickm95/lokalise-to-default-messages/commit/31875f31321e4fba900f97bef6cda8f1bf177909))
* **main:** release 2.4.8 ([#261](https://github.com/yannickm95/lokalise-to-default-messages/issues/261)) ([dafffbb](https://github.com/yannickm95/lokalise-to-default-messages/commit/dafffbb2492b903968b9e8e607c27efd477e88d6))
* **main:** release 2.4.9 ([#283](https://github.com/yannickm95/lokalise-to-default-messages/issues/283)) ([dfe8508](https://github.com/yannickm95/lokalise-to-default-messages/commit/dfe85088cbdeff04433e066f8eee5794459778c6))
* **main:** release 3.0.0 ([#386](https://github.com/yannickm95/lokalise-to-default-messages/issues/386)) ([3e12ad6](https://github.com/yannickm95/lokalise-to-default-messages/commit/3e12ad63ea45858c6cf0e493c94cb071552313fd))
* migrate to husky v5 ([47c2513](https://github.com/yannickm95/lokalise-to-default-messages/commit/47c2513416c9c6235cb38548e47a8b9ce47df380))
* re-add release-please ([58c215b](https://github.com/yannickm95/lokalise-to-default-messages/commit/58c215becea61b3378baee1f52a799ad7a295f13))
* release 0.6.0 ([98072da](https://github.com/yannickm95/lokalise-to-default-messages/commit/98072daefb2f869298fe1dda6374867f578abaee))
* release 0.7.0 ([a0b73ac](https://github.com/yannickm95/lokalise-to-default-messages/commit/a0b73acc17e096d45a3ba0e20ceabd5dceaab987))
* release 0.7.1 ([#9](https://github.com/yannickm95/lokalise-to-default-messages/issues/9)) ([6ffef0d](https://github.com/yannickm95/lokalise-to-default-messages/commit/6ffef0d86dc66b0a6258f9b3fef38f9798568e67))
* release 0.7.2 ([#10](https://github.com/yannickm95/lokalise-to-default-messages/issues/10)) ([ff54170](https://github.com/yannickm95/lokalise-to-default-messages/commit/ff54170eb89506cfc236c524f0e5c2efa97beea4))
* release 0.7.3 ([#11](https://github.com/yannickm95/lokalise-to-default-messages/issues/11)) ([db57de4](https://github.com/yannickm95/lokalise-to-default-messages/commit/db57de4a90bade9cd52e0982bf2d32454f4b2fa0))
* release 0.7.4 ([#12](https://github.com/yannickm95/lokalise-to-default-messages/issues/12)) ([aa5a7ba](https://github.com/yannickm95/lokalise-to-default-messages/commit/aa5a7ba80b243530a006e6af3ed0abcd558aafd4))
* release 0.7.5 ([#13](https://github.com/yannickm95/lokalise-to-default-messages/issues/13)) ([64e9185](https://github.com/yannickm95/lokalise-to-default-messages/commit/64e9185417a02ad1e6e59cbab36b74718d4929c2))
* release 1.0.0 ([#14](https://github.com/yannickm95/lokalise-to-default-messages/issues/14)) ([06355a2](https://github.com/yannickm95/lokalise-to-default-messages/commit/06355a2d2601353de406f29c181cf5d39326ed1e))
* release 1.0.1 ([#16](https://github.com/yannickm95/lokalise-to-default-messages/issues/16)) ([22d9fb2](https://github.com/yannickm95/lokalise-to-default-messages/commit/22d9fb26e238836cda35537ee85a32bf1cbe674d))
* release 1.0.10 ([#65](https://github.com/yannickm95/lokalise-to-default-messages/issues/65)) ([e77e9bf](https://github.com/yannickm95/lokalise-to-default-messages/commit/e77e9bfb5f7b6be8a6009e23a06dcd0f2e92d15e))
* release 1.0.11 ([#66](https://github.com/yannickm95/lokalise-to-default-messages/issues/66)) ([2f9b382](https://github.com/yannickm95/lokalise-to-default-messages/commit/2f9b3827e9fe8bf24e96d503314b78e398166483))
* release 1.0.12 ([bc175c3](https://github.com/yannickm95/lokalise-to-default-messages/commit/bc175c3ea55471024cd604319c7562ae522b8193))
* release 1.0.12 ([#83](https://github.com/yannickm95/lokalise-to-default-messages/issues/83)) ([85d2b3a](https://github.com/yannickm95/lokalise-to-default-messages/commit/85d2b3a7eab1f798bb1b91c8e2b39ae5048b9d4f))
* release 1.0.14 ([9cfc03d](https://github.com/yannickm95/lokalise-to-default-messages/commit/9cfc03de2167e3216752a8c7dcd3aa364f960c10))
* release 1.0.14 ([5558b77](https://github.com/yannickm95/lokalise-to-default-messages/commit/5558b77eaac4276426f5351aae32c40b3db015bd))
* release 1.0.14 ([63f6b37](https://github.com/yannickm95/lokalise-to-default-messages/commit/63f6b37f53fedc8217e99c6e378423c037407ae3))
* release 1.0.14 ([f9ecdd1](https://github.com/yannickm95/lokalise-to-default-messages/commit/f9ecdd1b53132a3ef8bef65cbfa8c7f2f616136f))
* release 1.0.15 ([#86](https://github.com/yannickm95/lokalise-to-default-messages/issues/86)) ([f386999](https://github.com/yannickm95/lokalise-to-default-messages/commit/f38699904361f35876142451f2c93afbd7c63fb5))
* release 1.0.16 ([#87](https://github.com/yannickm95/lokalise-to-default-messages/issues/87)) ([ed41458](https://github.com/yannickm95/lokalise-to-default-messages/commit/ed41458a291914522773b774f414e5c2cc4c3eab))
* release 1.0.17 ([e6f62bf](https://github.com/yannickm95/lokalise-to-default-messages/commit/e6f62bfa5e5bd184e46f084f9175538924080060))
* release 1.0.2 ([#17](https://github.com/yannickm95/lokalise-to-default-messages/issues/17)) ([b0c6a5d](https://github.com/yannickm95/lokalise-to-default-messages/commit/b0c6a5dc142d8386976f90772fcf6ae188073188))
* release 1.0.3 ([#18](https://github.com/yannickm95/lokalise-to-default-messages/issues/18)) ([177bc18](https://github.com/yannickm95/lokalise-to-default-messages/commit/177bc182b3d275dabf1ddb23fc2faaaf28eb6d9a))
* release 1.0.4 ([#19](https://github.com/yannickm95/lokalise-to-default-messages/issues/19)) ([23279a1](https://github.com/yannickm95/lokalise-to-default-messages/commit/23279a14ac639b4ed84301c2b925641e3d166bcb))
* release 1.0.5 ([#23](https://github.com/yannickm95/lokalise-to-default-messages/issues/23)) ([0c68b7e](https://github.com/yannickm95/lokalise-to-default-messages/commit/0c68b7e6eabece0218246ca5ed38b8971fa903b8))
* release 1.0.6 ([#24](https://github.com/yannickm95/lokalise-to-default-messages/issues/24)) ([53f36bc](https://github.com/yannickm95/lokalise-to-default-messages/commit/53f36bcce94d54e37a0515ca39fb52eda2b95fa2))
* release 1.0.7 ([#25](https://github.com/yannickm95/lokalise-to-default-messages/issues/25)) ([ed03a11](https://github.com/yannickm95/lokalise-to-default-messages/commit/ed03a11f65ec992bce7c9671fca2458fc12049cd))
* release 1.0.8 ([#26](https://github.com/yannickm95/lokalise-to-default-messages/issues/26)) ([5c44505](https://github.com/yannickm95/lokalise-to-default-messages/commit/5c44505ad50c8bec99554380c31ed1367b9fc715))
* release 1.0.9 ([#38](https://github.com/yannickm95/lokalise-to-default-messages/issues/38)) ([e63acbb](https://github.com/yannickm95/lokalise-to-default-messages/commit/e63acbbb8428dc601c5c1f569abedd615b1024b3))
* release 2.0.0 ([d5c0e35](https://github.com/yannickm95/lokalise-to-default-messages/commit/d5c0e35b410c3027252c48fac95808dbf05b5b4b))
* release 2.0.1 ([582a14e](https://github.com/yannickm95/lokalise-to-default-messages/commit/582a14e9a14c592df5b0416f3ade5d2528463505))
* release 2.1.0 ([70d99f8](https://github.com/yannickm95/lokalise-to-default-messages/commit/70d99f83d485ec76d803a6f9399ab35e9a1ee5f8))
* release 2.4.0 ([dc28a5d](https://github.com/yannickm95/lokalise-to-default-messages/commit/dc28a5da6aea31ee13e760671118834a8f0e9066))
* release 2.4.3 ([436ea82](https://github.com/yannickm95/lokalise-to-default-messages/commit/436ea821e68af0959f45e26b8b239c79b5bdb082))
* release 2.4.4 ([e8d6c1d](https://github.com/yannickm95/lokalise-to-default-messages/commit/e8d6c1d364abcb312222e49fdb8e673f7ebf5490))
* release v1.0.14 ([8f4d077](https://github.com/yannickm95/lokalise-to-default-messages/commit/8f4d0772a2df92ddfbc926f64ca86024b478b7d0))
* **release:** 0.4.13 ([44c343d](https://github.com/yannickm95/lokalise-to-default-messages/commit/44c343d60a45bbc608fe112174a19b55ab014711))
* **release:** 0.4.14 ([a2f56eb](https://github.com/yannickm95/lokalise-to-default-messages/commit/a2f56ebcfbae49744dc6d579777f866c8741ddc8))
* **release:** 0.4.15 ([084be57](https://github.com/yannickm95/lokalise-to-default-messages/commit/084be57f0f07e1848db1ba41d5b1b1d60d62ee9f))
* **release:** 0.4.16 ([10027f6](https://github.com/yannickm95/lokalise-to-default-messages/commit/10027f6a890d24d9c4782e251e3c5572464fc459))
* **release:** 0.4.17 ([e6a2e74](https://github.com/yannickm95/lokalise-to-default-messages/commit/e6a2e749dd956574a3b280b73186e686d0557932))
* **release:** 0.5.0 ([e41c7ec](https://github.com/yannickm95/lokalise-to-default-messages/commit/e41c7ece0b0cab4347c6f448badc729a7cedb46e))
* remove release-please ([af4bf2f](https://github.com/yannickm95/lokalise-to-default-messages/commit/af4bf2fd05afb8a341f485cb40c95ff96e40d3d5))
* remove unnused package ([d8ea369](https://github.com/yannickm95/lokalise-to-default-messages/commit/d8ea3694270c75a164d9465f2a47c68e2bdba6e7))
* remove unused dependency ([6db9067](https://github.com/yannickm95/lokalise-to-default-messages/commit/6db9067e274aa1a6546285cab2cd2b6db81f9fd9))
* remove unused types + update package.json ([90dfce8](https://github.com/yannickm95/lokalise-to-default-messages/commit/90dfce89de6dc98b24c2f5e679fa060df8b25971))
* remove version.md file ([8943766](https://github.com/yannickm95/lokalise-to-default-messages/commit/89437667f3342214074993189216fd352b2b0dab))
* revert bot to action change ([0c15a7d](https://github.com/yannickm95/lokalise-to-default-messages/commit/0c15a7d1bab62cbfa8ed9cbeff0e8401c47b9852))
* run new prettier on codebase ([0232f66](https://github.com/yannickm95/lokalise-to-default-messages/commit/0232f6636badb2a32a08f845e2d768b3c2346073))
* run postinstall ([20fe0d2](https://github.com/yannickm95/lokalise-to-default-messages/commit/20fe0d2f6e6f714d6abb59a69018209332bc2c82))
* run yarn upgrade ([bfbe1c0](https://github.com/yannickm95/lokalise-to-default-messages/commit/bfbe1c0ee55250ca7f0ed6784ccb7ceb38a81c15))
* run yarn upgrade ([1397f48](https://github.com/yannickm95/lokalise-to-default-messages/commit/1397f48fc8133a698c6a5c1e672a4e6be64fefdb))
* switch from yarn to pnpm as package manager ([791023b](https://github.com/yannickm95/lokalise-to-default-messages/commit/791023b80cf458f5df243f6ddfbab02639395fb4))
* trigger relese v1.0.0 ([b4fcbe7](https://github.com/yannickm95/lokalise-to-default-messages/commit/b4fcbe755e026e40a1d4c41a9d2a1cc171192b17))
* update dependabot yml ([8e0f189](https://github.com/yannickm95/lokalise-to-default-messages/commit/8e0f1894b50bd8cd50bdcffe670bf588e16062b1))
* update husky hooks ([7983cea](https://github.com/yannickm95/lokalise-to-default-messages/commit/7983cea8efba6e3ed6a5211f8b47b1ca05419270))
* update yarn.lock ([9363ff5](https://github.com/yannickm95/lokalise-to-default-messages/commit/9363ff5b2dbf94c361085d4ca54806b1e9e56723))
* upgrade yarn version + bump deps ([50dafff](https://github.com/yannickm95/lokalise-to-default-messages/commit/50dafffaaaf1c82106bd980cdb752d3bb634742c))
* use action instead of bot for release ([98edddc](https://github.com/yannickm95/lokalise-to-default-messages/commit/98edddcaf439ad7a38569c89d75368770a8ea129))
* use lint-staged for pre-commit ([20c15b3](https://github.com/yannickm95/lokalise-to-default-messages/commit/20c15b361377a9a884d2605523ffabece5eec3f6))
* use node 14 for release.yml ([893ba02](https://github.com/yannickm95/lokalise-to-default-messages/commit/893ba0201fd8b0ee71adae80d9084af47a72808e))

## [3.0.0](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.19...v3.0.0) (2023-10-16)


### ⚠ BREAKING CHANGES

* drop support for node 17 and lower, 18 or higher only is now supported

### Dependencies

* **ci-deps:** bump actions/checkout from 3 to 4 ([#372](https://github.com/yannickm95/lokalise-to-default-messages/issues/372)) ([cdec1f4](https://github.com/yannickm95/lokalise-to-default-messages/commit/cdec1f473a3d1a240f20c9b136bfd770124c46cd))
* **deps:** bump @commitlint/cli from 17.7.1 to 17.7.2 ([#378](https://github.com/yannickm95/lokalise-to-default-messages/issues/378)) ([ba10759](https://github.com/yannickm95/lokalise-to-default-messages/commit/ba1075990b7351d253d22ea07549adf9a2aa5392))
* **deps:** bump @commitlint/cli from 17.7.2 to 17.8.0 ([#382](https://github.com/yannickm95/lokalise-to-default-messages/issues/382)) ([3acffee](https://github.com/yannickm95/lokalise-to-default-messages/commit/3acffee32836f8fc7b59568bbc4d90c51d32748e))
* **deps:** bump @commitlint/config-conventional from 17.7.0 to 17.8.0 ([#383](https://github.com/yannickm95/lokalise-to-default-messages/issues/383)) ([20b850a](https://github.com/yannickm95/lokalise-to-default-messages/commit/20b850abd618da08e7acc755edd9a63c5e705263))
* **deps:** bump `@commitlint/packages` from 17.6.6 to 17.6.7 ([71b4cbe](https://github.com/yannickm95/lokalise-to-default-messages/commit/71b4cbeeb7602a7414731f32c3c0e65b15f33c69))
* **deps:** bump eslint from 8.43.0 to 8.44.0 ([#347](https://github.com/yannickm95/lokalise-to-default-messages/issues/347)) ([24c7167](https://github.com/yannickm95/lokalise-to-default-messages/commit/24c71678c7817b8b83b10f0bc120a6676f108b3d))
* **deps:** bump eslint from 8.44.0 to 8.45.0 ([#351](https://github.com/yannickm95/lokalise-to-default-messages/issues/351)) ([76f3b45](https://github.com/yannickm95/lokalise-to-default-messages/commit/76f3b4543df439b2865e074ff7d89c26664eb643))
* **deps:** bump eslint from 8.45.0 to 8.46.0 ([#356](https://github.com/yannickm95/lokalise-to-default-messages/issues/356)) ([d9cfeeb](https://github.com/yannickm95/lokalise-to-default-messages/commit/d9cfeebe4e3013777873a4f1dd23fda0457cbc0e))
* **deps:** bump eslint from 8.47.0 to 8.48.0 ([#368](https://github.com/yannickm95/lokalise-to-default-messages/issues/368)) ([61e8edc](https://github.com/yannickm95/lokalise-to-default-messages/commit/61e8edc71284dccd181843ca670578138ca661da))
* **deps:** bump eslint from 8.48.0 to 8.49.0 ([#374](https://github.com/yannickm95/lokalise-to-default-messages/issues/374)) ([feb503d](https://github.com/yannickm95/lokalise-to-default-messages/commit/feb503d3c1fb31caee137e4c61f40511e16451ac))
* **deps:** bump eslint from 8.49.0 to 8.50.0 ([#376](https://github.com/yannickm95/lokalise-to-default-messages/issues/376)) ([1df8591](https://github.com/yannickm95/lokalise-to-default-messages/commit/1df8591c87314c9184dde0ce5619560446952ede))
* **deps:** bump eslint from 8.50.0 to 8.51.0 ([#380](https://github.com/yannickm95/lokalise-to-default-messages/issues/380)) ([cb14d62](https://github.com/yannickm95/lokalise-to-default-messages/commit/cb14d62cedf2411d8ed5d3908cd5e80dc8f55a50))
* **deps:** bump lint-staged from 14.0.1 to 15.0.1 ([#384](https://github.com/yannickm95/lokalise-to-default-messages/issues/384)) ([c607d0e](https://github.com/yannickm95/lokalise-to-default-messages/commit/c607d0efd6341a79c0b673da6f745ef605e335b5))
* **deps:** bump prettier from 3.0.0 to 3.0.1 ([#358](https://github.com/yannickm95/lokalise-to-default-messages/issues/358)) ([25a9437](https://github.com/yannickm95/lokalise-to-default-messages/commit/25a943783e384fab52b72d966ceb1b184d3ad60f))
* **deps:** bump prettier from 3.0.2 to 3.0.3 ([#370](https://github.com/yannickm95/lokalise-to-default-messages/issues/370)) ([cfb8130](https://github.com/yannickm95/lokalise-to-default-messages/commit/cfb8130eb1c7685341609b1e12ac7cde533a2abd))
* **deps:** update package manager ([cf3c213](https://github.com/yannickm95/lokalise-to-default-messages/commit/cf3c2134e5d66ad4ede9bb8db47183385d2385dc))
* **deps:** update package manager and deps ([e95dfee](https://github.com/yannickm95/lokalise-to-default-messages/commit/e95dfee97be50ffc4ba382c6294c7f96fe6ad5d6))
* **deps:** update package manager and prettier to v3.0.0 ([eaeb7a4](https://github.com/yannickm95/lokalise-to-default-messages/commit/eaeb7a4f8390b8ac4d0cb7891087f43fcdebfb94))
* **deps:** update package manager and underlying deps ([a6cb9e6](https://github.com/yannickm95/lokalise-to-default-messages/commit/a6cb9e678a171bce777c10c62a41ad66a1a09a6d))
* **deps:** update package manager and update underlying deps ([8563a74](https://github.com/yannickm95/lokalise-to-default-messages/commit/8563a74db9421a6382b3d0aeaa973c78fb0f8a8b))
* **deps:** update package manager and update underlying deps ([315cdda](https://github.com/yannickm95/lokalise-to-default-messages/commit/315cddac80deb6080e7c2f318081ed7c8135e505))
* **deps:** update underlying depos ([e37c989](https://github.com/yannickm95/lokalise-to-default-messages/commit/e37c989df6994b8c61a6c5112ff87c42ee01db82))


### Miscellaneous

* drop support for node 17 and lower, 18 or higher only is now supported ([d435745](https://github.com/yannickm95/lokalise-to-default-messages/commit/d4357454a9685d0e6d2fea9a6223b827d1d63a37))

## [2.4.19](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.18...v2.4.19) (2023-06-29)


### Dependencies

* **deps:** bump @commitlint/cli from 17.6.5 to 17.6.6 ([#341](https://github.com/yannickm95/lokalise-to-default-messages/issues/341)) ([0a96342](https://github.com/yannickm95/lokalise-to-default-messages/commit/0a963424374db0c8f26df83e4248d35652c84b10))
* **deps:** bump @commitlint/config-conventional from 17.6.5 to 17.6.6 ([#340](https://github.com/yannickm95/lokalise-to-default-messages/issues/340)) ([9851156](https://github.com/yannickm95/lokalise-to-default-messages/commit/98511561dd97e55c2fd0a9c84d3b57a5cd56dfe8))
* **deps:** bump lint-staged + update underling deps ([9e803dc](https://github.com/yannickm95/lokalise-to-default-messages/commit/9e803dccd414c7aa5f4afefdd49bbbcae64396a3))
* **deps:** update deps ([95efd66](https://github.com/yannickm95/lokalise-to-default-messages/commit/95efd66fc2a3c801a62f727baed16e2053bc9213))
* **deps:** update package manager and dependencies ([ce2d66d](https://github.com/yannickm95/lokalise-to-default-messages/commit/ce2d66d0f5ae55016b11f79a003bbe8655c6f8db))
* **deps:** update package manager and update underlying deps ([bf959d2](https://github.com/yannickm95/lokalise-to-default-messages/commit/bf959d2993ec7692bad89192704c4661d35cfc89))
* **deps:** update packageManager and dependencies ([07fa219](https://github.com/yannickm95/lokalise-to-default-messages/commit/07fa2195b16f28688ec238dfb13eb4f2216ec044))

## [2.4.18](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.17...v2.4.18) (2023-06-07)


### Dependencies

* **deps:** update [@commitlint](https://github.com/commitlint) deps ([f5f85cd](https://github.com/yannickm95/lokalise-to-default-messages/commit/f5f85cd597bd6c0e04a6c6417d42550b38e1fd61))
* **deps:** update eslint 8.41.0 -&gt; 8.42.0 ([1ff38e4](https://github.com/yannickm95/lokalise-to-default-messages/commit/1ff38e42bf29f79c38d3d8a4749a766948944540))
* **deps:** update underlying deps ([dfecfcb](https://github.com/yannickm95/lokalise-to-default-messages/commit/dfecfcb43cd4cf1e5594b58ad52fbbf07515deed))

## [2.4.17](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.16...v2.4.17) (2023-05-30)


### Dependencies

* **deps:** bump replace-in-file, remove @types/node, bump pnpm package manager ([8bd0e69](https://github.com/yannickm95/lokalise-to-default-messages/commit/8bd0e6929169e6142fed5c0d0619ba569bc7fb76))
* **deps:** update @types/node and underlying deps ([0953048](https://github.com/yannickm95/lokalise-to-default-messages/commit/0953048c7ce6eb44bb288df159cca3fbdbd6ec06))

## [2.4.16](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.15...v2.4.16) (2023-05-22)


### Dependencies

* **deps:** bump deps and package manager ([92008f4](https://github.com/yannickm95/lokalise-to-default-messages/commit/92008f4e7f8c1d6a96464d15a05ce37a6f0cd74e))
* **deps:** bump eslint from v8.39.0 to v8.40.0 ([e566392](https://github.com/yannickm95/lokalise-to-default-messages/commit/e566392dbfd50a8d24f8c028a63e82fb31a14398))
* **deps:** update deps ([72c8f96](https://github.com/yannickm95/lokalise-to-default-messages/commit/72c8f9697f52e0ecc1700b13ac701ea9c5f8dd8d))
* **deps:** update underlying deps ([bab98e4](https://github.com/yannickm95/lokalise-to-default-messages/commit/bab98e4e248c1b3a2c910451027301f7fd672aa3))
* **deps:** update underlying deps ([d1fac49](https://github.com/yannickm95/lokalise-to-default-messages/commit/d1fac4920dfcd6d8f5cb3434cae47f62b0d8d5f8))
* drop node 12 and 14 support + lock @types/node to v16 ([adf40ab](https://github.com/yannickm95/lokalise-to-default-messages/commit/adf40abc9a4f3badb19d610c5b0a7fcddd008dfd))

## [2.4.15](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.14...v2.4.15) (2023-05-04)


### Bug Fixes

* ci disable prepare script ([0845f1d](https://github.com/yannickm95/lokalise-to-default-messages/commit/0845f1d8f64f85a89459cb1ff46f137575aa2d36))

## [2.4.14](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.13...v2.4.14) (2023-05-04)


### Bug Fixes

* npm publish ci ([060be04](https://github.com/yannickm95/lokalise-to-default-messages/commit/060be0430abeabe72318ba6fb5e42fdbb28e155a))

## [2.4.13](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.12...v2.4.13) (2023-05-04)


### Miscellaneous

* switch from yarn to pnpm as package manager ([791023b](https://github.com/yannickm95/lokalise-to-default-messages/commit/791023b80cf458f5df243f6ddfbab02639395fb4))


### Dependencies

* **deps:** bump lint-staged from 13.2.1 to 13.2.2 ([#314](https://github.com/yannickm95/lokalise-to-default-messages/issues/314)) ([0519d86](https://github.com/yannickm95/lokalise-to-default-messages/commit/0519d8689d7aafb316121be4db1f02d6cf4815ff))
* **deps:** update commitlint deps ([03fa5b1](https://github.com/yannickm95/lokalise-to-default-messages/commit/03fa5b11b38d909f43b5c2878271defa09c0eb66))

## [2.4.12](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.11...v2.4.12) (2023-04-25)


### Dependencies

* **deps:** bump yaml from 2.2.1 to 2.2.2 ([#312](https://github.com/yannickm95/lokalise-to-default-messages/issues/312)) ([081fd9f](https://github.com/yannickm95/lokalise-to-default-messages/commit/081fd9fbd8915229268a25db9f6cbfbd22ae1d5a))

## [2.4.11](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.10...v2.4.11) (2023-04-24)


### Dependencies

* **deps:** bump [@commitlint](https://github.com/commitlint) packages to 17.6.1 ([c5cac2e](https://github.com/yannickm95/lokalise-to-default-messages/commit/c5cac2e8df0966d24b661d95745f859a6191aa51))
* **deps:** bump @commitlint/cli from 17.5.0 to 17.5.1 ([#299](https://github.com/yannickm95/lokalise-to-default-messages/issues/299)) ([7ceeba6](https://github.com/yannickm95/lokalise-to-default-messages/commit/7ceeba6ce9d0340954a7e7640360ce67fd501793))
* **deps:** bump eslint from 8.36.0 to 8.37.0 ([#300](https://github.com/yannickm95/lokalise-to-default-messages/issues/300)) ([3e1214d](https://github.com/yannickm95/lokalise-to-default-messages/commit/3e1214ded1809e92c5ede3d0c90d9395074761c7))
* **deps:** bump eslint from 8.37.0 to 8.38.0 ([#302](https://github.com/yannickm95/lokalise-to-default-messages/issues/302)) ([7895673](https://github.com/yannickm95/lokalise-to-default-messages/commit/7895673fb2c82bac5508f0fb427a0cbe6118d442))
* **deps:** bump eslint from 8.38.0 to 8.39.0 ([#310](https://github.com/yannickm95/lokalise-to-default-messages/issues/310)) ([2d9de4a](https://github.com/yannickm95/lokalise-to-default-messages/commit/2d9de4ab992e1a1c7c138e85ca68564718546648))
* **deps:** bump lint-staged from 13.2.0 to 13.2.1 ([#303](https://github.com/yannickm95/lokalise-to-default-messages/issues/303)) ([7729477](https://github.com/yannickm95/lokalise-to-default-messages/commit/7729477310a7425e51e107b030cc0a8ce6206f00))
* **deps:** bump prettier from 2.8.7 to 2.8.8 ([#309](https://github.com/yannickm95/lokalise-to-default-messages/issues/309)) ([563ac4a](https://github.com/yannickm95/lokalise-to-default-messages/commit/563ac4a78c6fa48bf69b92d95b08bbda4bc81eb0))

## [2.4.10](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.9...v2.4.10) (2023-03-27)


### Dependencies

* **deps:** bump @commitlint/cli from 17.4.4 to 17.5.0 ([7be238a](https://github.com/yannickm95/lokalise-to-default-messages/commit/7be238acfc3adef3a77e48a3cec9fa155fd5ccbf))
* **deps:** bump prettier from 2.8.6 to 2.8.7 ([#297](https://github.com/yannickm95/lokalise-to-default-messages/issues/297)) ([7ff96a3](https://github.com/yannickm95/lokalise-to-default-messages/commit/7ff96a3e04e29bac13fe9a604b2bd9b5c5224356))
* **deps:** update depdendencies ([5b3965e](https://github.com/yannickm95/lokalise-to-default-messages/commit/5b3965ee52f69f36c7fb95807617442965d08d06))
* **deps:** update deps ([dcf62e8](https://github.com/yannickm95/lokalise-to-default-messages/commit/dcf62e81ed93c223edeb4e555022f537a1e2edda))
* **deps:** update deps ([4c70327](https://github.com/yannickm95/lokalise-to-default-messages/commit/4c70327a953f14baad17ce703125f2f4072d528f))
* **deps:** update deps and underlying deps ([b179034](https://github.com/yannickm95/lokalise-to-default-messages/commit/b1790345018ddcfce4464b19b451f8a1eeb6ea22))
* **deps:** update underlying deps ([ae2ed54](https://github.com/yannickm95/lokalise-to-default-messages/commit/ae2ed542bdcd37414c9d62308cc009abc6a1664b))
* **deps:** update yarn version ([4019211](https://github.com/yannickm95/lokalise-to-default-messages/commit/40192118c72b7d7fc38cfc6f8b2e8a793fa75d25))

## [2.4.9](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.8...v2.4.9) (2023-02-14)


### Dependencies

* **chore:** update yarn version ([b9cc09a](https://github.com/yannickm95/lokalise-to-default-messages/commit/b9cc09a832536477cb86912c462fb70e97f7fdfa))
* **deps:** bump @commitlint/cli from 17.4.0 to 17.4.1 ([#262](https://github.com/yannickm95/lokalise-to-default-messages/issues/262)) ([c995a92](https://github.com/yannickm95/lokalise-to-default-messages/commit/c995a9216d0b81d2f19be36b4de16c6b7f7c5668))
* **deps:** bump @commitlint/cli from 17.4.1 to 17.4.2 ([#265](https://github.com/yannickm95/lokalise-to-default-messages/issues/265)) ([9dfb47b](https://github.com/yannickm95/lokalise-to-default-messages/commit/9dfb47b361e2ca2b3622363265596876f03aef6a))
* **deps:** bump @commitlint/config-conventional from 17.4.0 to 17.4.2 ([#264](https://github.com/yannickm95/lokalise-to-default-messages/issues/264)) ([03edac6](https://github.com/yannickm95/lokalise-to-default-messages/commit/03edac6e2ef4610b2f0998aa2e95a8600adffa57))
* **deps:** bump eslint and prettier ([6477e4a](https://github.com/yannickm95/lokalise-to-default-messages/commit/6477e4ab97093aec3a28e56fb8aa4ded782752e9))
* **deps:** bump eslint from 8.33.0 to 8.34.0 ([#277](https://github.com/yannickm95/lokalise-to-default-messages/issues/277)) ([75b68e0](https://github.com/yannickm95/lokalise-to-default-messages/commit/75b68e037d30c07463840c616b5edfb94722809a))
* **deps:** bump lint-staged from 13.1.0 to 13.1.1 ([#273](https://github.com/yannickm95/lokalise-to-default-messages/issues/273)) ([6f8913e](https://github.com/yannickm95/lokalise-to-default-messages/commit/6f8913ed6f84100da538cf2f95a6acb83c4d81af))
* **deps:** bump prettier from 2.8.3 to 2.8.4 ([#274](https://github.com/yannickm95/lokalise-to-default-messages/issues/274)) ([4ff41d7](https://github.com/yannickm95/lokalise-to-default-messages/commit/4ff41d703af6408ce55eecc39110c0b63f57aceb))
* **deps:** update deps ([9b61979](https://github.com/yannickm95/lokalise-to-default-messages/commit/9b619793720d1d18eb6a8951fc7fff1f7c7230b2))
* **deps:** update deps ([9c0239f](https://github.com/yannickm95/lokalise-to-default-messages/commit/9c0239ff56a7f40cc8ceb7e459e611b39c939e16))

## [2.4.8](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.7...v2.4.8) (2023-01-09)


### Dependencies

* **deps:** bump prettier from 2.8.1 to 2.8.2 ([#260](https://github.com/yannickm95/lokalise-to-default-messages/issues/260)) ([e693436](https://github.com/yannickm95/lokalise-to-default-messages/commit/e6934361760f3f3d8047f5d42219c6069ccfa016))

## [2.4.7](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.6...v2.4.7) (2023-01-05)


### Bug Fixes

* make husky install optional ([9220bd3](https://github.com/yannickm95/lokalise-to-default-messages/commit/9220bd34f77d4f12e2d1aa531b992243ac6d3aca))

## [2.4.6](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.5...v2.4.6) (2023-01-05)


### Bug Fixes

* pass otp properly in publish ([150705d](https://github.com/yannickm95/lokalise-to-default-messages/commit/150705dcd90e34d33b0e9d6afb3a033f35fdd470))

## [2.4.5](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.4...v2.4.5) (2023-01-05)


### Bug Fixes

* pass otp to publish command ([e1011d6](https://github.com/yannickm95/lokalise-to-default-messages/commit/e1011d67e1eb486838afdfa1fd564e37b7fc1b2a))

## [2.4.4](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.3...v2.4.4) (2023-01-05)


### Dependencies

* cache and install yarn deps when releasing ([0c32057](https://github.com/yannickm95/lokalise-to-default-messages/commit/0c32057f4a2833cf44438da8211534c0a6c77c21))


### Miscellaneous

* release 2.4.4 ([e8d6c1d](https://github.com/yannickm95/lokalise-to-default-messages/commit/e8d6c1d364abcb312222e49fdb8e673f7ebf5490))

## [2.4.3](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.2...v2.4.3) (2023-01-05)


### Dependencies

* run yarn publish command instead of npm ([b635e96](https://github.com/yannickm95/lokalise-to-default-messages/commit/b635e960c8a399698347e427fd277aff476c3b21))


### Miscellaneous

* release 2.4.3 ([436ea82](https://github.com/yannickm95/lokalise-to-default-messages/commit/436ea821e68af0959f45e26b8b239c79b5bdb082))

## [2.4.2](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.1...v2.4.2) (2023-01-05)


### Bug Fixes

* properly configure husk with Yarn 2+ ([3473017](https://github.com/yannickm95/lokalise-to-default-messages/commit/347301722030de369fa013f629134385e81315e4))

## [2.4.1](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.4.0...v2.4.1) (2023-01-05)


### Bug Fixes

* use prepare instead of postinstall for husky ([b06c7d3](https://github.com/yannickm95/lokalise-to-default-messages/commit/b06c7d307aa28a2ffb2ffaeb1e4df605926d461a))

## [2.4.0](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.3.0...v2.4.0) (2023-01-05)


### Dependencies

* **deps:** bump @commitlint/cli and @commitlint/config-conventional from 17.2.0 to 17.3.0 + update underlying deps ([#238](https://github.com/yannickm95/lokalise-to-default-messages/issues/238)) ([5addee2](https://github.com/yannickm95/lokalise-to-default-messages/commit/5addee2819c0f5e570d83ebb3820c3353ce29b15))
* **deps:** bump @commitlint/cli from 17.1.2 to 17.2.0 ([#232](https://github.com/yannickm95/lokalise-to-default-messages/issues/232)) ([128bbc5](https://github.com/yannickm95/lokalise-to-default-messages/commit/128bbc5dc959a492c2acc0dd9cd3d031dfac3067))
* **deps:** bump @commitlint/config-conventional from 17.1.0 to 17.2.0 ([#233](https://github.com/yannickm95/lokalise-to-default-messages/issues/233)) ([76775f8](https://github.com/yannickm95/lokalise-to-default-messages/commit/76775f8f82d210a7028d0c8eec10db8f36b7909c))
* **deps:** bump eslint from 8.25.0 to 8.26.0 ([#231](https://github.com/yannickm95/lokalise-to-default-messages/issues/231)) ([fb11a0c](https://github.com/yannickm95/lokalise-to-default-messages/commit/fb11a0c79103623ec25384340008a75e22831a3f))
* **deps:** bump eslint from 8.26.0 to 8.27.0 ([#235](https://github.com/yannickm95/lokalise-to-default-messages/issues/235)) ([b624884](https://github.com/yannickm95/lokalise-to-default-messages/commit/b624884a38e5b09d85ce7c9bcf024511c1d2ea79))
* **deps:** bump eslint from 8.27.0 to 8.28.0 ([#236](https://github.com/yannickm95/lokalise-to-default-messages/issues/236)) ([30649c2](https://github.com/yannickm95/lokalise-to-default-messages/commit/30649c2ca3040a00d8dcb72d88924cbd97940775))
* **deps:** bump husky from 8.0.1 to 8.0.2 ([#234](https://github.com/yannickm95/lokalise-to-default-messages/issues/234)) ([b716443](https://github.com/yannickm95/lokalise-to-default-messages/commit/b7164438b107cd3a3d19c3366806d2c9a21127b4))
* **deps:** bump lint-staged from 13.0.3 to 13.0.4 ([#240](https://github.com/yannickm95/lokalise-to-default-messages/issues/240)) ([7aaa3c3](https://github.com/yannickm95/lokalise-to-default-messages/commit/7aaa3c3cd11154aac2d19e458e8ee4652eb90a00))
* **deps:** bump prettier from 2.7.1 to 2.8.0 ([#239](https://github.com/yannickm95/lokalise-to-default-messages/issues/239)) ([7d580a6](https://github.com/yannickm95/lokalise-to-default-messages/commit/7d580a6e741101be7721b51aa2fad4f54df2afde))
* **deps:** bump prettier from 2.8.0 to 2.8.1 ([#243](https://github.com/yannickm95/lokalise-to-default-messages/issues/243)) ([9b7d3da](https://github.com/yannickm95/lokalise-to-default-messages/commit/9b7d3da076bae060602e107b0554c7b8f444cd03))


### Miscellaneous

* cleanup build + update deps ([54a8972](https://github.com/yannickm95/lokalise-to-default-messages/commit/54a897206d7302b9f16ef476c7fd0604d07c7361))
* **deps:** update deps ([943edd7](https://github.com/yannickm95/lokalise-to-default-messages/commit/943edd70a890e285c236fe8ac21bac7d36a42615))
* release 2.4.0 ([dc28a5d](https://github.com/yannickm95/lokalise-to-default-messages/commit/dc28a5da6aea31ee13e760671118834a8f0e9066))
* update yarn.lock ([9363ff5](https://github.com/yannickm95/lokalise-to-default-messages/commit/9363ff5b2dbf94c361085d4ca54806b1e9e56723))
* upgrade yarn version + bump deps ([50dafff](https://github.com/yannickm95/lokalise-to-default-messages/commit/50dafffaaaf1c82106bd980cdb752d3bb634742c))

## [2.3.0](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.2.0...v2.3.0) (2022-09-28)


### Features

* restructure files and expose main entry in package.json ([80233bf](https://github.com/yannickm95/lokalise-to-default-messages/commit/80233bfb8c9a195791c73b2544489f85a9fc33c1))

## [2.2.0](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.1.4...v2.2.0) (2022-08-02)


### Features

* **build:** upgrade yarn to v3 ([af31339](https://github.com/yannickm95/lokalise-to-default-messages/commit/af313398ba7d1651fce9694cf9c88b652b3092e3))

### [2.1.4](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.1.3...v2.1.4) (2022-05-19)


### Documentation

* update copyright and license ([88dd2b8](https://github.com/yannickm95/lokalise-to-default-messages/commit/88dd2b8128874b6b7194867770c2dc60cc2dc8f3))

### [2.1.3](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.1.2...v2.1.3) (2022-05-19)


### Documentation

* update v2 ESM information ([213fecb](https://github.com/yannickm95/lokalise-to-default-messages/commit/213fecb0fb995dec4ef9f19afa5e7c6343884c57))

### [2.1.2](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.1.1...v2.1.2) (2022-05-19)


### Documentation

* update copyright ([7c6b115](https://github.com/yannickm95/lokalise-to-default-messages/commit/7c6b115e8ca88251000288210b879cf83ba8dc93))

### [2.1.1](https://github.com/yannickm95/lokalise-to-default-messages/compare/v2.1.0...v2.1.1) (2022-05-18)


### Bug Fixes

* better progressbar naming ([dfb930c](https://github.com/yannickm95/lokalise-to-default-messages/commit/dfb930c859137f9c888245813361f0e2f6327ef7))

## [2.1.0](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v2.0.1...v2.1.0) (2022-05-18)

### Features

- upgrade internal packages ([7d08cd2](https://github.com/yannickm95/lokalise-to-default-messages/commit/7d08cd2ac2a5784d544c63b615149a80277c6431))

### [2.0.1](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v2.0.0...v2.0.1) (2021-12-03)

### Bug Fixes

- export function in index so it's available in bin ([4d95546](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/4d95546a83268e79e41138613b4c8b2bb51fa5c0))

## [2.0.0](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.17...v2.0.0) (2021-12-03)

### ⚠ BREAKING CHANGES

- Package is ESM now

### Code Refactoring

- convert package from CJS to ESM ([51f1522](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/51f152207d9b5380063f5b054905f804ccab804f))

### [1.0.17](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.16...v1.0.17) (2021-11-30)

### Bug Fixes

- package.json adjust author ([0d1ebf6](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/0d1ebf64ae35f663f13a1a4359d57d32b16a794a))

### [1.0.16](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.15...v1.0.16) (2021-07-02)

### Bug Fixes

- better error logging ([8b05b85](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/8b05b85029f982a9d48bb50779f4155c40ce41dc))

### [1.0.15](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.11...v1.0.15) (2021-07-02)

### Bug Fixes

- better error logging

### [1.0.14](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.11...v1.0.14) (2021-07-02)

### Bug Fixes

- fix automatic release

### [1.0.13](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.11...v1.0.13) (2021-07-02)

### Bug Fixes

- use better variable naming for translation ([17989b1](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/17989b1ad0e96d1672f394db1e129c653ad74213))

### [1.0.12](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.10...v1.0.12) (2021-05-03)

- chores(deps): update packages

### [1.0.11](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.10...v1.0.11) (2021-05-03)

### Bug Fixes

- remove postinstall script ([1e4af7e](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/1e4af7ed53d40c07abce27f562635c0d033b0c4d))

### [1.0.10](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.9...v1.0.10) (2021-05-03)

### Bug Fixes

- defaultMessage format string type according to content ([ceadbc5](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/ceadbc5d92a4d6700e7b8da4017e07c5537cdc97))

### [1.0.9](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.8...v1.0.9) (2021-01-06)

### Bug Fixes

- better naming for diff ([c9cdde5](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/c9cdde510e780215f12774c17f4c65e101510aa8))

### [1.0.8](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.7...v1.0.8) (2020-11-10)

### Bug Fixes

- drop support for github packages in ci ([986dc9f](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/986dc9f2208d1eee47cfa420322dad3d8e5a3364))

### [1.0.7](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.6...v1.0.7) (2020-11-10)

### Bug Fixes

- update ci release.ymll ([69039fd](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/69039fd371d63257affeba22dffb974b5ca0ee62))

### [1.0.6](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.5...v1.0.6) (2020-11-10)

### Bug Fixes

- trigger release ([c7bb838](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/c7bb838494f731df215971afb380e18e8c55393b))

### [1.0.5](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.4...v1.0.5) (2020-11-10)

### Bug Fixes

- fix release-please ci v5 ([56e6b95](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/56e6b95f6d379b178842013f321115e14d752559))

### [1.0.4](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.3...v1.0.4) (2020-11-10)

### Bug Fixes

- fix release-please ci v4 ([f7940a2](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/f7940a2a68165fd56cd7be5a184191a0e9ef4631))

### [1.0.3](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.2...v1.0.3) (2020-11-10)

### Bug Fixes

- fix release-please ci ([9a5310f](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/9a5310f31f28a7e25b54460ba38e85a602c7ea19))
- fix release-please ci v2 ([c245457](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/c245457542a1a00354345595b050f0e678742ff8))
- fix release-please ci v3 ([67a275c](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/67a275cadd85d9408644c3c8c992bf306be55d1a))

### [1.0.2](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.1...v1.0.2) (2020-11-10)

### Bug Fixes

- fix automerge ci workflow ([8d7f33c](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/8d7f33c89ecc04776e0a1a4562cecd79ae7c7404))

### [1.0.1](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v1.0.0...v1.0.1) (2020-11-10)

### Bug Fixes

- add automatic release merge ([26c2ed0](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/26c2ed0b9bd7a5f87d6d0e9895d70c68c3ef06c8))

## [1.0.0](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v0.7.5...v1.0.0) (2020-11-10)

### ⚠ BREAKING CHANGES

- trigger release v1.0.0

### Features

- trigger release v1.0.0 ([0833709](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/0833709a639ea74498768bbf99a298c09b87ca1b))

### [0.7.5](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v0.7.4...v0.7.5) (2020-11-09)

### Bug Fixes

- fix cli argument path generation ([3c52a4b](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/3c52a4b8cf2606277bc660618b24d425bc38a7a2))

### [0.7.4](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v0.7.3...v0.7.4) (2020-11-09)

### Bug Fixes

- only run ci on main and release branches ([726d669](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/726d6698bb4bbcf2c29152986cacb5a0010bc0de))

### [0.7.3](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v0.7.2...v0.7.3) (2020-11-09)

### Bug Fixes

- fix final ci problems ([2733654](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/2733654e41476962ac3301205a964d1cd2fc90ac))

### [0.7.2](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v0.7.1...v0.7.2) (2020-11-09)

### Bug Fixes

- ci some more(test2) ([81451cc](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/81451cc0943a00d4fd5f5eb50134af0a97a8121a))

### [0.7.1](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v0.7.0...v0.7.1) (2020-11-09)

### Bug Fixes

- ci some more(test) ([81d083b](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/81d083b7249440bd153dc81d052d4783c0f2310f))
- workflow ci ([ec747e8](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/ec747e8d14f69a2fcad5466252340fb1549bb703))

## [0.7.0](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v0.6.0...v0.7.0) (2020-11-09)

### ⚠ BREAKING CHANGES

- add new workflow system
- overhaul ci wofkflow

### Bug Fixes

- properly setup workflows ([92aa65e](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/92aa65e1420ed36abfaf9dcfd60327a3b36d86fe))

### Continuous Integration

- add new workflow system ([430f77d](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/430f77d096dc51d6e4e2982026331871b17c5077))
- overhaul ci wofkflow ([470ef2c](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/470ef2cd3a5abdf3d7649b0bdc5d63023b630869))

## [0.6.0](https://www.github.com/yannickm95/lokalise-to-default-messages/compare/v0.5.0...v0.6.0) (2020-11-09)

### ⚠ BREAKING CHANGES

- drop standard-version package

### Build System

- drop standard-version package ([0978e38](https://www.github.com/yannickm95/lokalise-to-default-messages/commit/0978e38517ccd1d30fdcdc3da03a83e035666626))

## [0.5.0](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.17...v0.5.0) (2020-11-09)

### ⚠ BREAKING CHANGES

- support --old-translation-file argument

### Features

- support --old-translation-file argument ([254ef77](https://github.com/yannickm95/lokalise-to-default-messages/commit/254ef7702f8c3ae278fd5419fb82cbd0b30db772))

### [0.4.17](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.16...v0.4.17) (2020-11-09)

### Features

- support old translation file diff ([8dd2d2d](https://github.com/yannickm95/lokalise-to-default-messages/commit/8dd2d2d4fdeec5f8ffb7dc6faae7031e40eeeeaa))

### [0.4.16](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.15...v0.4.16) (2020-11-09)

### Bug Fixes

- generate release properly ([52e40a3](https://github.com/yannickm95/lokalise-to-default-messages/commit/52e40a35f12eca4977435222da0382347f5d62c1))

### [0.4.15](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.14...v0.4.15) (2020-11-09)

### Bug Fixes

- release output in git is correctly dipslayed ([812b3b0](https://github.com/yannickm95/lokalise-to-default-messages/commit/812b3b008bc2650595f23b30e6daa3e07d7c90a1))

### [0.4.14](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.13...v0.4.14) (2020-11-09)

### [0.4.13](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.7...v0.4.13) (2020-11-09)

### Bug Fixes

- add --no-verify to release script ([8f44514](https://github.com/yannickm95/lokalise-to-default-messages/commit/8f4451418060312f219a54419284185822b0a6da))

#### [v0.4.12](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.11...v0.4.12)

- Also run analyze on release branch [`710a09c`](https://github.com/yannickm95/lokalise-to-default-messages/commit/710a09cf84afe6314065c988ff8acf8579711db1)

#### [v0.4.11](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.10...v0.4.11)

> 4 November 2020

- Remove unnecessary workflow step [`4b200f4`](https://github.com/yannickm95/lokalise-to-default-messages/commit/4b200f45c7400ad16064f0aa8ba94fc03ed58f5c)

#### [v0.4.10](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.9...v0.4.10)

> 4 November 2020

- Use single quote in yaml [`9b0f9ac`](https://github.com/yannickm95/lokalise-to-default-messages/commit/9b0f9ac127c959a4f308bc7d6f3316759a14578d)

#### [v0.4.9](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.8...v0.4.9)

> 4 November 2020

- Migrate roadmap readme -&gt; project [`167d7bd`](https://github.com/yannickm95/lokalise-to-default-messages/commit/167d7bd9fe7cd4bd3f24f50f4de8d53aae82b9d1)

#### [v0.4.8](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.7...v0.4.8)

> 4 November 2020

- Update release template [`b89bea1`](https://github.com/yannickm95/lokalise-to-default-messages/commit/b89bea1e39a4a976987179c38972588b2569bb37)
- test [`4b5be6f`](https://github.com/yannickm95/lokalise-to-default-messages/commit/4b5be6f35cb9ae9114f11d16a62e7fb81c24dbb6)

#### [v0.4.7](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.6...v0.4.7)

> 4 November 2020

- :notebook: Update Changelog [`70be685`](https://github.com/yannickm95/lokalise-to-default-messages/commit/70be6855a7334267fa40c13b8f2db008e3e18d4c)
- Add changelog script [`efc10f3`](https://github.com/yannickm95/lokalise-to-default-messages/commit/efc10f3dd2581b3eab351a54d424b86310e12add)

#### [v0.4.6](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.5...v0.4.6)

> 4 November 2020

#### [v0.4.5](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.4...v0.4.5)

> 4 November 2020

- Cleanup up changelog creation [`3034197`](https://github.com/yannickm95/lokalise-to-default-messages/commit/30341973e0592921669d61359c0db0a55775297c)

#### [v0.4.4](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.3...v0.4.4)

> 4 November 2020

- Finalize ci automisation [`43d1128`](https://github.com/yannickm95/lokalise-to-default-messages/commit/43d1128602c5649e13e9a3350d090e646713cc41)
- Test run [`90eb650`](https://github.com/yannickm95/lokalise-to-default-messages/commit/90eb6502ef58394fb0bfb51b1cb2f466b54171f7)
- Test ci [`c47d1bb`](https://github.com/yannickm95/lokalise-to-default-messages/commit/c47d1bb302f2d4fce1d834f0a5c89a25e8ecd0d1)

#### [v0.4.3](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.2...v0.4.3)

> 4 November 2020

- Last fixes [`a879fea`](https://github.com/yannickm95/lokalise-to-default-messages/commit/a879fea8a7fc19a8f7830e90b01eaaa8e4fbe942)

#### [v0.4.2](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.1...v0.4.2)

> 4 November 2020

- Fix ci.yml [`69dce73`](https://github.com/yannickm95/lokalise-to-default-messages/commit/69dce7353d5f74fb2eac2f003a624c0ba75c60de)

#### [v0.4.1](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.4.0...v0.4.1)

> 4 November 2020

- Update ci.yml [`6bbc3a0`](https://github.com/yannickm95/lokalise-to-default-messages/commit/6bbc3a001c5286853173f4a696e704d5b559d051)

#### [v0.4.0](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.3.5...v0.4.0)

> 4 November 2020

- update ci.yml [`6410f59`](https://github.com/yannickm95/lokalise-to-default-messages/commit/6410f59da95859dd87aba329c1283168440a29ce)
- :notebook: Update changelog [`6320c0e`](https://github.com/yannickm95/lokalise-to-default-messages/commit/6320c0e577a3c3ab3e32499a81afe1dfaf6bc38c)
- Fix ci some more [`c5a1fc7`](https://github.com/yannickm95/lokalise-to-default-messages/commit/c5a1fc734662ad3cfee3f267f3d241948931dd2f)

#### [v0.3.5](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.3.4...v0.3.5)

> 4 November 2020

- :notebook: Update changelog [`a2eede0`](https://github.com/yannickm95/lokalise-to-default-messages/commit/a2eede0af45123445ee6faaf96f5ad1927fb3f88)
- Fix ci.yml [`fd4ee3a`](https://github.com/yannickm95/lokalise-to-default-messages/commit/fd4ee3a12f16e15f771e13ee62befa77e2119b47)
- Fixe release name in workflow [`043f9e0`](https://github.com/yannickm95/lokalise-to-default-messages/commit/043f9e0ab5aba8ea6cfc802eb8887e7c0fc67d1b)

#### [v0.3.4](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.3.3...v0.3.4)

> 3 November 2020

- 📖 DOC: Changelog [`768f6e9`](https://github.com/yannickm95/lokalise-to-default-messages/commit/768f6e9d7c85238e96c464a462db9a0f432d6606)
- Update ci.yml [`3718b2e`](https://github.com/yannickm95/lokalise-to-default-messages/commit/3718b2e9d76d46d2267e05ac65332b558eb562a5)

#### [v0.3.3](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.3.2...v0.3.3)

> 3 November 2020

- 📖 DOC: Changelog [`c360c5e`](https://github.com/yannickm95/lokalise-to-default-messages/commit/c360c5e02a87e52a1e978a3e5f46d2938347155a)
- Fix missing { :man_facepalming: [`dcb722b`](https://github.com/yannickm95/lokalise-to-default-messages/commit/dcb722b0c40faee6e4808eb29771a7fcd55f2fc4)

#### [v0.3.2](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.3.1...v0.3.2)

> 3 November 2020

- Cleanup workflow + fix warnings [`24c5467`](https://github.com/yannickm95/lokalise-to-default-messages/commit/24c5467d78cfd0be6f90177b2a78700d41573164)
- 📖 DOC: Changelog [`484d181`](https://github.com/yannickm95/lokalise-to-default-messages/commit/484d1817b452771d41ba3adb5c7218bb0c044028)

#### [v0.3.1](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.3.0...v0.3.1)

> 3 November 2020

- 📖 DOC: Changelog [`e7065a3`](https://github.com/yannickm95/lokalise-to-default-messages/commit/e7065a3198f809ad6c7a6f752cec64c368d8fbf8)
- Only run jobs when needed [`b080ccc`](https://github.com/yannickm95/lokalise-to-default-messages/commit/b080cccdac205d25b6919e1f3710c68eb9480e1f)

#### [v0.3.0](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.2.5...v0.3.0)

> 3 November 2020

- Finalize automation :ok_hand: [`ef95566`](https://github.com/yannickm95/lokalise-to-default-messages/commit/ef9556663d1f0e28ddc8b7e4734178dee9fac943)

#### [v0.2.5](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.2.4...v0.2.5)

> 3 November 2020

- Test github packages [`f26ac88`](https://github.com/yannickm95/lokalise-to-default-messages/commit/f26ac8819a839d2bff5c721904519f59e36baac8)

#### [v0.2.4](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.2.3...v0.2.4)

> 3 November 2020

- Fix needs in ci.yml [`7bed9df`](https://github.com/yannickm95/lokalise-to-default-messages/commit/7bed9df1f097c2c5e46e0b3f578f67e7463fcaef)
- Roadmap automate release :white_check_mark: [`709060e`](https://github.com/yannickm95/lokalise-to-default-messages/commit/709060ecbd03c60d46d21156ae340d53b6b29eef)

#### [v0.2.3](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.2.2...v0.2.3)

> 3 November 2020

- Setup automatic release to Github packages [`c92cf6c`](https://github.com/yannickm95/lokalise-to-default-messages/commit/c92cf6c8d2e405f029b10360404e1e3c4cfa43d9)
- 📖 DOC: Changelog [`8e812b3`](https://github.com/yannickm95/lokalise-to-default-messages/commit/8e812b34fc77cefc9012c207340a2aeed1726989)

#### [v0.2.2](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.2.1...v0.2.2)

> 3 November 2020

- Fix ci.yml [`dfeed12`](https://github.com/yannickm95/lokalise-to-default-messages/commit/dfeed1284629072cc0ff3e1218678b2498f6336f)

#### [v0.2.1](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.2.0...v0.2.1)

> 3 November 2020

- NPM automatic publish :check_mark: [`fb9a698`](https://github.com/yannickm95/lokalise-to-default-messages/commit/fb9a698d77411bd0e6c38755a833b8385cbb534b)
- 📖 DOC: Changelog [`734c94e`](https://github.com/yannickm95/lokalise-to-default-messages/commit/734c94e94738803dff1dcde1626607561edbc901)

#### [v0.2.0](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.19...v0.2.0)

> 3 November 2020

- Complete inital automisation [`cb7786f`](https://github.com/yannickm95/lokalise-to-default-messages/commit/cb7786f93aca7a16678878264c372ce910a097ca)

#### [v0.1.19](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.18...v0.1.19)

> 3 November 2020

- Fix ci.yml [`c2a3bd8`](https://github.com/yannickm95/lokalise-to-default-messages/commit/c2a3bd87a631296d1eb51a38524de9f48d56d8db)

#### [v0.1.18](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.17...v0.1.18)

> 3 November 2020

- skip testing for the moment [`a06e5a4`](https://github.com/yannickm95/lokalise-to-default-messages/commit/a06e5a450c66aadece8af1b93234f14204b2c026)
- Update main changelog automisation [`07f64ce`](https://github.com/yannickm95/lokalise-to-default-messages/commit/07f64cea8371754286e269a6b3b52209ec8bb799)

#### [v0.1.17](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.16...v0.1.17)

> 3 November 2020

- Update main Changelog after release [`56683d7`](https://github.com/yannickm95/lokalise-to-default-messages/commit/56683d785718b549a6a682953550b19393f6b022)
- Final Automatic release? :bowtie: [`be9f831`](https://github.com/yannickm95/lokalise-to-default-messages/commit/be9f8312c709edfbf4f93b218e08cc849807b649)

#### [v0.1.16](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.15...v0.1.16)

> 3 November 2020

- Fix workflow [`5a8bd91`](https://github.com/yannickm95/lokalise-to-default-messages/commit/5a8bd9109f435739456dfb861164e7143fcb6a56)

#### [v0.1.15](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.14...v0.1.15)

> 3 November 2020

- Automatic release changelog [`ddd0526`](https://github.com/yannickm95/lokalise-to-default-messages/commit/ddd0526b6b65fd2db3aa25e3b4538331de108010)
- Fix worfklow [`a7b3fcb`](https://github.com/yannickm95/lokalise-to-default-messages/commit/a7b3fcb197eb7f9a587837e91ff1d2b10bc850e5)

#### [v0.1.14](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.13...v0.1.14)

> 3 November 2020

- Auto change log fix [`2d58a2d`](https://github.com/yannickm95/lokalise-to-default-messages/commit/2d58a2db528a6cbac62c67e101c152955b9e4ae8)

#### [v0.1.13](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.12...v0.1.13)

> 3 November 2020

- Fix automatic changelog action [`2881a30`](https://github.com/yannickm95/lokalise-to-default-messages/commit/2881a307918dc0ec9cd1431f679e17194ee3c3cd)

#### [v0.1.12](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.11...v0.1.12)

> 3 November 2020

- Implement automatic changelog [`304e548`](https://github.com/yannickm95/lokalise-to-default-messages/commit/304e54892ec914dae3bacc5683653c42aded668a)
- Delete codeql-analysis.yml [`d1aa13a`](https://github.com/yannickm95/lokalise-to-default-messages/commit/d1aa13a2c5b80dd91352b198f5388b5127e9b768)
- ci.yml [`49262df`](https://github.com/yannickm95/lokalise-to-default-messages/commit/49262dfdb07bdee1920fab49c393f59ed09fb9f7)
- Update ci.yml [`5527aad`](https://github.com/yannickm95/lokalise-to-default-messages/commit/5527aadbc5abed49d83c1697cc3a11b8aec4863e)
- CI.yml master -&gt; main :shrug: [`7f1e133`](https://github.com/yannickm95/lokalise-to-default-messages/commit/7f1e13391b9dbd942a74442bcca7641fa768faca)
- Fix ci.yml [`0e69612`](https://github.com/yannickm95/lokalise-to-default-messages/commit/0e696121f18d2a49cdfe1064469b2bbb133c9917)
- Update ci.yml [`080bbf8`](https://github.com/yannickm95/lokalise-to-default-messages/commit/080bbf8960a06e20f1a7e82cbbacb3eb1fc5f7b7)

#### [v0.1.11](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.10...v0.1.11)

> 3 November 2020

- Create codeql-analysis.yml [`b89b8e8`](https://github.com/yannickm95/lokalise-to-default-messages/commit/b89b8e88047277f0d3472186961495eb9acea74a)
- Create dependabot.yml [`69ae81e`](https://github.com/yannickm95/lokalise-to-default-messages/commit/69ae81e454db797c5f35dbaac5e50a678bfb1725)
- update README.md [`c906785`](https://github.com/yannickm95/lokalise-to-default-messages/commit/c906785f86ecb08b09b2c1f0d3736b4b52f03fe8)

#### [v0.1.10](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.9...v0.1.10)

> 3 November 2020

- update readme [`378a916`](https://github.com/yannickm95/lokalise-to-default-messages/commit/378a916b06db8d8622b8a2249f7fd44da08677b9)
- Update README.md [`f585d26`](https://github.com/yannickm95/lokalise-to-default-messages/commit/f585d261bdcc78411c1223c573015bbf34d3ef7a)
- Adjust readme and changelog [`86615f7`](https://github.com/yannickm95/lokalise-to-default-messages/commit/86615f7fd103f1731e2310e147002b28ae3fd569)
- Update README.md [`7bbba12`](https://github.com/yannickm95/lokalise-to-default-messages/commit/7bbba12564eec1d4d3897919a0d7fec09de0a32c)
- Update README.md [`4f6fbf5`](https://github.com/yannickm95/lokalise-to-default-messages/commit/4f6fbf53cc5aed228fa8c7289ea8483447150ec0)
- Update roadmap [`5e443ab`](https://github.com/yannickm95/lokalise-to-default-messages/commit/5e443ab14fb8ff5976f853d298fe8b3a63d36f0d)

#### [v0.1.9](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.8...v0.1.9)

> 2 November 2020

- cleanup scripts [`a9bbfe4`](https://github.com/yannickm95/lokalise-to-default-messages/commit/a9bbfe4938cec2a7eb937f4e0404873e86b3e158)

#### [v0.1.8](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.7...v0.1.8)

> 2 November 2020

- update scripts v3 [`73e3819`](https://github.com/yannickm95/lokalise-to-default-messages/commit/73e38192d99098dadb2c7eb987b442bc9f55e2f0)

#### [v0.1.7](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.6...v0.1.7)

> 2 November 2020

- update scripts some more [`4ae65b9`](https://github.com/yannickm95/lokalise-to-default-messages/commit/4ae65b9ab6e7d2074edcdbc2703710ee740dadf6)

#### [v0.1.6](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.5...v0.1.6)

> 2 November 2020

- update README.md [`cb1d6ad`](https://github.com/yannickm95/lokalise-to-default-messages/commit/cb1d6ad1bf3b0ae099a67790b0399118ab83d357)

#### [v0.1.5](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.4...v0.1.5)

> 2 November 2020

- Update scripts 2 [`5ef4135`](https://github.com/yannickm95/lokalise-to-default-messages/commit/5ef41352dcdecffc5f4f3cb5787b6794db5d4bb9)

#### [v0.1.4](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.3...v0.1.4)

> 2 November 2020

- update scripts [`2d3864c`](https://github.com/yannickm95/lokalise-to-default-messages/commit/2d3864c1460b0030167099c009b4fa3e780c3616)

#### [v0.1.3](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.2...v0.1.3)

> 2 November 2020

- Fix save log path [`fd826a8`](https://github.com/yannickm95/lokalise-to-default-messages/commit/fd826a85e888923d3e5c33e257d28f4da0a97174)
- Update postversion script [`3ce0b18`](https://github.com/yannickm95/lokalise-to-default-messages/commit/3ce0b181eee1aa6583859f8cbd07826f557ed77e)

#### [v0.1.2](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.1...v0.1.2)

> 2 November 2020

- bump version to v0.1.3 [`09e2e56`](https://github.com/yannickm95/lokalise-to-default-messages/commit/09e2e560889bae54c5c94816b5eb1f71b6e2c6bf)
- Fix wrong bump [`0d32423`](https://github.com/yannickm95/lokalise-to-default-messages/commit/0d32423b7804447b87551953d2cd237417216c2d)
- Update README.md [`ffd09b9`](https://github.com/yannickm95/lokalise-to-default-messages/commit/ffd09b963073cb87707f7a14289b2cadd076df0d)

#### [v0.1.1](https://github.com/yannickm95/lokalise-to-default-messages/compare/v0.1.0...v0.1.1)

> 2 November 2020

- Fix critical bug + adjust cli access command [`9ecf771`](https://github.com/yannickm95/lokalise-to-default-messages/commit/9ecf771fa51756905252c6f8334abd2271bd9673)

#### v0.1.0

> 2 November 2020

- Add initial code + configs [`#1`](https://github.com/yannickm95/lokalise-to-default-messages/pull/1)
- Npm config [`1baed88`](https://github.com/yannickm95/lokalise-to-default-messages/commit/1baed880551523ca3d1469182c3597d0b02bfd8f)
- Initial commit [`b7f2c57`](https://github.com/yannickm95/lokalise-to-default-messages/commit/b7f2c57154857b8511663a9a0245b82dc6569ca1)
